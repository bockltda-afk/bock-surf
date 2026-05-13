import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    const supabase = createClient();
    
    // Obtenemos solo productos activos, ordenados por posición
    const { data: products, error } = await supabase
      .from('products')
      .select('*')
      .eq('is_active', true)
      .order('order_position', { ascending: true });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ products });
  } catch (err) {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
