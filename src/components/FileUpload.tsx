// components/FileUpload.tsx
import { Upload } from "lucide-react";

const FileUpload: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center space-y-6">
        <Upload className="w-16 h-16 text-red-800" />
        <hr className="w-[700px] border-2 border-red-800 shadow-md" />
        <label className="bg-red-800 text-white font-bold py-2 px-6 rounded-md cursor-pointer hover:bg-red-700 transition">
          CHOOSE FILE
          <input type="file" className="hidden" />
        </label>
      </div>
    </div>
  );
};

export default FileUpload;
