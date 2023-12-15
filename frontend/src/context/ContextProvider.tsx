// import { createContext, ReactNode, useContext, useState } from "react";

// type Question = {
//   id: number;
//   question: string;
//   betValueYes: number;
//   betValueNo: number;
//   imageUrl: string;
//   category: string;
//   subCategory: string;
//   liquidity: number;
//   tradingFee: number;
//   expiryDate: string;
//   volume: number;
// };

// interface QuestionsState {
//   store: Question[];
//   setStore: React.Dispatch<React.SetStateAction<Question>>;
// }

// const defaultState: QuestionsState = {
//   store: [
//     {
//       id: 0,
//       question: "",
//       betValueYes: 0,
//       betValueNo: 0,
//       imageUrl: "",
//       category: "",
//       subCategory: "",
//       liquidity: 0,
//       tradingFee: 0,
//       expiryDate: "",
//       volume: 0,
//     },
//   ],
//   setStore: (): void => {},
// };

// export const MarketContext = createContext(defaultState);

// const ContextProvider = ({ children }: { children: ReactNode }) => {
//   const [store, setStore] = useState<Question[]>([]);

//   return (
//     <>
//       <MarketContext.Provider value={{ store, setStore }}>
//         {children}
//       </MarketContext.Provider>
//     </>
//   );
// };

// export default ContextProvider;

// export const useThisContext = () => useContext(MarketContext);
