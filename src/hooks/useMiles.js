const useMiles = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
export default useMiles;
