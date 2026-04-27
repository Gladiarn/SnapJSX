import type React from "react";

export function Pagination({
  currentPage,
  totalPages,
  handlePagination,
  inputValue,
  setInputValue,
}: {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  currentPage: number;
  totalPages: number;
  handlePagination: (page: number) => void;
}) {
  return (
    <div className="mt-16 flex justify-center items-center gap-4">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => handlePagination(Math.max(1, currentPage - 1))}
        className="px-4 py-2 rounded-lg bg-accent text-sm font-medium hover:bg-accent/80 transition-colors disabled:opacity-50 disabled:hover:bg-accent"
      >
        Previous
      </button>

      <div className="flex items-center gap-2 text-sm font-medium">
        Page
        <input
          type="text"
          inputMode="numeric"
          value={inputValue}
          onChange={(e) => {
            const val = e.target.value.replace(/[^0-9]/g, "");
            setInputValue(val);
            if (val !== "") {
              const parsed = parseInt(val, 10);
              if (parsed >= 1 && parsed <= totalPages) {
                handlePagination(parsed);
              } else if (parsed > totalPages) {
                handlePagination(totalPages);
              }
            }
          }}
          onBlur={() => {
            const val = parseInt(inputValue, 10);
            if (Number.isNaN(val) || val < 1) {
              setInputValue("1");
              handlePagination(1);
            } else if (val > totalPages) {
              setInputValue(totalPages.toString());
              handlePagination(totalPages);
            }
          }}
          className="w-12 h-9 text-center rounded-md border border-input bg-background focus:ring-1 focus:ring-primary outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        of {totalPages}
      </div>

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => handlePagination(Math.min(totalPages, currentPage + 1))}
        className="px-4 py-2 rounded-lg bg-accent text-sm font-medium hover:bg-accent/80 transition-colors disabled:opacity-50 disabled:hover:bg-accent"
      >
        Next
      </button>
    </div>
  );
}
