
import "./App.css";
import Navbar from "./components/navbar";
import HeaderAppBar from "./components/HeaderAppBar";
import { supabase } from "./supabaseClient";
import { useEffect } from "react";
import ProductList from "./components/ProductList";
function App() {
  useEffect(() => {
    console.log("🔥 useEffect เริ่มทำงาน");
    const testConnection = async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        console.error("❌ ไม่สามารถเชื่อมต่อ Supabase:", error.message);
      } else {
        console.log("✅ เชื่อมต่อสำเร็จ ข้อมูล:", data);
      }
    };

    testConnection();
  }, []);
  return (
    <>
      <HeaderAppBar />
      <Navbar />
      <ProductList />
    </>
  );
}

export default App;
