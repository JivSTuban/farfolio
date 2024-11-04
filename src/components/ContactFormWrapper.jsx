import { ReactNode } from 'react';

export default function ContactFormWrapper({ children }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-2">
      <div className="w-full max-w-3xl">
        <div className="bg-zinc-800 rounded-t-lg p-2 flex items-center space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 cursor-pointer"></div>
        </div>
        <div 
          className="bg-zinc-900 rounded-b-lg border border-zinc-700 shadow-xl p-3"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}