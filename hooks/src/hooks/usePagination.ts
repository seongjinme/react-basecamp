import { useState } from "react";

const usePagination = (initialPage: number = 1) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) =>
      initialPage <= prevPage - 1 ? initialPage : prevPage - 1
    );
  };

  return { currentPage, goToNextPage, goToPrevPage };
};

export default usePagination;
