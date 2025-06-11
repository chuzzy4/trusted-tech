import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import {
  Download,
  ExternalLink,
  FileText,
  Search,
  Filter,
  Grid,
  List,
  Loader2,
  BookOpen,
  Star,
  Calendar,
  Eye,
} from "lucide-react";
import Navbar from "@/components/Navbar";

interface DocumentItem {
  id: string;
  name: string;
  pdfUrl: string;
  imageUrl: string;
  category?: string;
  description?: string;
  downloadCount?: number;
  createdAt?: string;
}

export default function Resource() {
  const [resources, setResources] = useState<DocumentItem[]>([]);
  const [filteredResources, setFilteredResources] = useState<DocumentItem[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "documents"));
        const docs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as DocumentItem[];
        setResources(docs);
        setFilteredResources(docs);
      } catch (error) {
        console.error("Failed to fetch resources:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  useEffect(() => {
    let filtered = resources;

    if (searchTerm) {
      filtered = filtered.filter(
        (resource) =>
          resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          resource.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredResources(filtered);
  }, [searchTerm, resources]);

  const handleDownload = (resource: DocumentItem) => {
    window.open(resource.pdfUrl, "_blank");
  };

  const handleView = (resource: DocumentItem) => {
    window.open(resource.pdfUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        fontFamily: "Aeonik, sans-serif",
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative overflow-hidden "
        style={{ backgroundColor: "#002B5C" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 mt-20">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div
                className="p-4 rounded-2xl shadow-lg"
                style={{ backgroundColor: "#4C2FF4" }}
              >
                <BookOpen className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-lato font-bold text-white mb-6">
              Trust & Safety
              <br />
              <span style={{ color: "#FFE100" }}>Resource Library</span>
            </h1>
            <p className="text-xl md:text-2xl font-lato  text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive collection of resources designed to
              help you build safer, more ethical, and resilient digital
              ecosystems across Africa and beyond.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
              <div className="text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(255, 225, 0, 0.1)" }}
                >
                  <FileText className="h-8 w-8" style={{ color: "#FFE100" }} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 font-lato">
                  Ethics & Compliance
                </h3>
                <p className="text-blue-200 text-sm font-lato">
                  Guidelines for ethical digital practices and regulatory
                  compliance
                </p>
              </div>
              <div className="text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(255, 103, 0, 0.1)" }}
                >
                  <Star className="h-8 w-8" style={{ color: "#FF6700" }} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 font-lato">
                  Best Practices
                </h3>
                <p className="text-blue-200 text-sm font-lato">
                  Proven strategies for building trust and safety in digital
                  platforms
                </p>
              </div>
              <div className="text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(76, 47, 244, 0.1)" }}
                >
                  <BookOpen className="h-8 w-8" style={{ color: "#4C2FF4" }} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 font-lato">
                  Implementation Guides
                </h3>
                <p className="text-blue-200 text-sm font-lato">
                  Practical resources for integrating safety measures into your
                  systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg border p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search trust & safety resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:border-transparent transition-all text-lg"
                  style={{
                    fontFamily: "Lato, sans-serif",
                  }}
                />
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center">
              <span
                className="text-sm text-gray-600 mr-3"
                style={{ fontFamily: "Aeonik, sans-serif" }}
              >
                View:
              </span>
              <div className="flex items-center border-2 border-gray-200 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === "grid"
                      ? "text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  style={{
                    backgroundColor:
                      viewMode === "grid" ? "#4C2FF4" : "transparent",
                  }}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === "list"
                      ? "text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  style={{
                    backgroundColor:
                      viewMode === "list" ? "#4C2FF4" : "transparent",
                  }}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <p
            className="text-gray-600 text-lg"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            {filteredResources.length === resources.length
              ? `Explore our collection of ${resources.length} trust & safety resources`
              : `Found ${filteredResources.length} of ${resources.length} resources`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <Loader2
              className="h-12 w-12 animate-spin mb-4"
              style={{ color: "#4C2FF4" }}
            />
            <p
              className="text-gray-600 text-lg"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              Loading resources...
            </p>
          </div>
        ) : filteredResources.length === 0 ? (
          /* Empty State */
          <div className="text-center py-16">
            <div
              className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#f1f5f9" }}
            >
              <FileText className="h-12 w-12 text-gray-400" />
            </div>
            <h3
              className="text-2xl font-semibold text-gray-900 mb-2"
              style={{ fontFamily: "NouvelR, sans-serif" }}
            >
              No resources found
            </h3>
            <p
              className="text-gray-600 mb-6 text-lg"
              style={{ fontFamily: "Lato, sans-serif" }}
            >
              {searchTerm
                ? "Try adjusting your search terms or browse all available resources"
                : "Trust & safety resources will appear here once they are uploaded by our team"}
            </p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="px-8 py-4 text-white rounded-xl font-medium transition-all hover:shadow-lg text-lg"
                style={{
                  backgroundColor: "#4C2FF4",
                  fontFamily: "Aeonik, sans-serif",
                }}
              >
                Browse All Resources
              </button>
            )}
          </div>
        ) : (
          /* Resources Grid/List */
          <div
            className={
              viewMode === "grid"
                ? "grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "space-y-6"
            }
          >
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className={`bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                  viewMode === "list" ? "flex items-center p-6" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden ${
                    viewMode === "list"
                      ? "w-32 h-24 rounded-xl flex-shrink-0"
                      : "aspect-w-16 aspect-h-10"
                  }`}
                >
                  <img
                    src={resource.imageUrl}
                    alt={resource.name}
                    className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
                      viewMode === "list" ? "w-full h-full" : "w-full h-48"
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className={viewMode === "list" ? "ml-6 flex-1" : "p-6"}>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 font-lato">
                      {resource.name}
                    </h3>
                  </div>

                  {resource.description && (
                    <p
                      className="text-gray-600 mb-4 line-clamp-2"
                      style={{ fontFamily: "Lato, sans-serif" }}
                    >
                      {resource.description}
                    </p>
                  )}

                  {/* Actions */}
                  <div
                    className={`flex gap-3 ${
                      viewMode === "list" ? "mt-4" : ""
                    }`}
                  >
                    <button
                      onClick={() => handleView(resource)}
                      className="flex items-center px-4 py-2 text-white rounded-xl font-medium transition-all hover:shadow-lg flex-1 justify-center font-lato"
                      style={{
                        backgroundColor: "#4C2FF4",
                      }}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </button>
                    <button
                      onClick={() => handleDownload(resource)}
                      className="flex font-lato items-center px-4 py-2 text-white rounded-xl font-medium transition-all hover:shadow-lg flex-1 justify-center"
                      style={{
                        backgroundColor: "#FF6700",
                      }}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </button>
                  </div>

                  {/* Metadata */}
                  {(resource.downloadCount || resource.createdAt) && (
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
                      {resource.downloadCount && (
                        <span className="flex items-center">
                          <Download className="h-3 w-3 mr-1" />
                          {resource.downloadCount} downloads
                        </span>
                      )}
                      {resource.createdAt && (
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(resource.createdAt).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
