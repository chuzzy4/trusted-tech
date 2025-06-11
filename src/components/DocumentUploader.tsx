import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { db, storage } from "../firebaseConfig";
import {
  Upload,
  Search,
  Edit3,
  Trash2,
  Download,
  Eye,
  X,
  CheckCircle,
  AlertCircle,
  FileText,
  ImageIcon,
  Loader2,
} from "lucide-react";

interface DocumentItem {
  id: string;
  name: string;
  imageUrl: string;
  pdfUrl: string;
}

interface NotificationState {
  show: boolean;
  type: "success" | "error";
  title: string;
  message: string;
}

export default function AdminComponent() {
  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [editId, setEditId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState<DocumentItem | null>(
    null
  );
  const [notification, setNotification] = useState<NotificationState>({
    show: false,
    type: "success",
    title: "",
    message: "",
  });

  const showNotification = (
    type: "success" | "error",
    title: string,
    message: string
  ) => {
    setNotification({ show: true, type, title, message });
    setTimeout(
      () => setNotification((prev) => ({ ...prev, show: false })),
      5000
    );
  };

  const fetchDocuments = async () => {
    setIsLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "documents"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<DocumentItem, "id">),
      }));
      setDocuments(data);
    } catch (error) {
      showNotification(
        "error",
        "Failed to load documents",
        "Please try refreshing the page"
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || (!editId && (!imageFile || !pdfFile))) {
      showNotification(
        "error",
        "Missing Fields",
        "Please fill in all required fields"
      );
      return;
    }

    setIsUploading(true);
    try {
      let imageUrl = "";
      let pdfUrl = "";

      if (imageFile) {
        const imageRef = ref(
          storage,
          `coverImages/${Date.now()}_${imageFile.name}`
        );
        await uploadBytes(imageRef, imageFile);
        imageUrl = await getDownloadURL(imageRef);
      }

      if (pdfFile) {
        const pdfRef = ref(storage, `pdfs/${Date.now()}_${pdfFile.name}`);
        await uploadBytes(pdfRef, pdfFile);
        pdfUrl = await getDownloadURL(pdfRef);
      }

      if (editId) {
        const docRef = doc(db, "documents", editId);
        const updateData: any = { name };
        if (imageUrl) updateData.imageUrl = imageUrl;
        if (pdfUrl) updateData.pdfUrl = pdfUrl;

        await updateDoc(docRef, updateData);
        showNotification(
          "success",
          "Document Updated",
          "The document has been successfully updated"
        );
        setEditId(null);
      } else {
        await addDoc(collection(db, "documents"), { name, imageUrl, pdfUrl });
        showNotification(
          "success",
          "Document Added",
          "The document has been successfully uploaded"
        );
      }

      setName("");
      setImageFile(null);
      setPdfFile(null);
      await fetchDocuments();
    } catch (error) {
      showNotification(
        "error",
        "Upload Failed",
        "There was an error processing your request"
      );
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (document: DocumentItem) => {
    setIsDeleting(document.id);
    try {
      await deleteDoc(doc(db, "documents", document.id));

      try {
        await deleteObject(ref(storage, document.imageUrl));
        await deleteObject(ref(storage, document.pdfUrl));
      } catch (storageError) {
        console.warn("Error deleting storage files:", storageError);
      }

      showNotification(
        "success",
        "Document Deleted",
        "The document has been successfully removed"
      );
      await fetchDocuments();
    } catch (error) {
      showNotification(
        "error",
        "Delete Failed",
        "There was an error deleting the document"
      );
    } finally {
      setIsDeleting(null);
      setShowDeleteModal(null);
    }
  };

  const handleEdit = (doc: DocumentItem) => {
    setEditId(doc.id);
    setName(doc.name);
    setImageFile(null);
    setPdfFile(null);
  };

  const cancelEdit = () => {
    setEditId(null);
    setName("");
    setImageFile(null);
    setPdfFile(null);
  };

  const filteredDocs = documents.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 font-nouvelr">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Document Management
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Manage your documents and resources
              </p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <FileText className="h-4 w-4" />
              <span>{documents.length} documents</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Upload Form */}
        <div className="bg-white rounded-xl shadow-sm border mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <Upload className="h-5 w-5 mr-2 text-blue-600" />
              {editId ? "Edit Document" : "Upload New Document"}
            </h2>
          </div>

          <div onSubmit={handleUpload} className="p-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Document Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter document name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <ImageIcon className="inline h-4 w-4 mr-1" />
                    Cover Image {!editId && "*"}
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    required={!editId}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FileText className="inline h-4 w-4 mr-1" />
                    PDF Document {!editId && "*"}
                  </label>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={(e) => setPdfFile(e.target.files?.[0] || null)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    required={!editId}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 mt-6 pt-6 border-t">
              {editId && (
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              )}
              <button
                type="button"
                onClick={handleUpload}
                disabled={isUploading}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center transition-colors"
              >
                {isUploading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    {editId ? "Updating..." : "Uploading..."}
                  </>
                ) : (
                  <>
                    <Upload className="h-4 w-4 mr-2" />
                    {editId ? "Update Document" : "Upload Document"}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search documents..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Documents Grid */}
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <span className="ml-2 text-gray-600">Loading documents...</span>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredDocs.map((document) => (
              <div
                key={document.id}
                className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                  <img
                    src={document.imageUrl}
                    alt={document.name}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {document.name}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    <a
                      href={document.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </a>

                    <a
                      href={document.pdfUrl}
                      download
                      className="flex items-center px-3 py-1.5 text-xs font-medium text-green-700 bg-green-50 rounded-full hover:bg-green-100 transition-colors"
                    >
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </a>

                    <button
                      onClick={() => handleEdit(document)}
                      className="flex items-center px-3 py-1.5 text-xs font-medium text-orange-700 bg-orange-50 rounded-full hover:bg-orange-100 transition-colors"
                    >
                      <Edit3 className="h-3 w-3 mr-1" />
                      Edit
                    </button>

                    <button
                      onClick={() => setShowDeleteModal(document)}
                      disabled={isDeleting === document.id}
                      className="flex items-center px-3 py-1.5 text-xs font-medium text-red-700 bg-red-50 rounded-full hover:bg-red-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isDeleting === document.id ? (
                        <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                      ) : (
                        <Trash2 className="h-3 w-3 mr-1" />
                      )}
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredDocs.length === 0 && !isLoading && (
              <div className="col-span-full text-center py-12">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No documents found
                </h3>
                <p className="text-gray-600">
                  {search
                    ? "Try adjusting your search terms"
                    : "Upload your first document to get started"}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="h-5 w-5 text-red-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">
                  Delete Document
                </h3>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              Are you sure you want to delete "
              <strong>{showDeleteModal.name}</strong>"? This action cannot be
              undone.
            </p>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowDeleteModal(null)}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(showDeleteModal)}
                disabled={isDeleting === showDeleteModal.id}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center transition-colors"
              >
                {isDeleting === showDeleteModal.id ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Deleting...
                  </>
                ) : (
                  "Delete Document"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notification Toast */}
      {notification.show && (
        <div className="fixed top-4 right-4 z-50 max-w-sm w-full">
          <div
            className={`p-4 rounded-lg shadow-lg border-l-4 ${
              notification.type === "success"
                ? "bg-green-50 border-green-400"
                : "bg-red-50 border-red-400"
            }`}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {notification.type === "success" ? (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-600" />
                )}
              </div>
              <div className="ml-3 flex-1">
                <p
                  className={`text-sm font-medium ${
                    notification.type === "success"
                      ? "text-green-800"
                      : "text-red-800"
                  }`}
                >
                  {notification.title}
                </p>
                <p
                  className={`mt-1 text-sm ${
                    notification.type === "success"
                      ? "text-green-700"
                      : "text-red-700"
                  }`}
                >
                  {notification.message}
                </p>
              </div>
              <button
                onClick={() =>
                  setNotification((prev) => ({ ...prev, show: false }))
                }
                className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
