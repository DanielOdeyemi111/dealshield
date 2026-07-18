export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          full_name: string | null;
          phone: string | null;
          avatar_url: string | null;
          created_at: string;
        };
        Insert: {
          id: string;
          full_name?: string | null;
          phone?: string | null;
          avatar_url?: string | null;
          created_at?: string;
        };
        Update: {
          full_name?: string | null;
          phone?: string | null;
          avatar_url?: string | null;
        };
      };
      deals: {
        Row: {
          id: string;
          deal_number: string;
          title: string;
          description: string | null;
          amount: number;
          currency: string;
          status: "pending" | "funded" | "shipped" | "completed" | "disputed" | "cancelled";
          buyer_id: string | null;
          seller_id: string | null;
          deadline_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          deal_number: string;
          title: string;
          description?: string | null;
          amount: number;
          currency?: string;
          status?: "pending" | "funded" | "shipped" | "completed" | "disputed" | "cancelled";
          buyer_id?: string | null;
          seller_id?: string | null;
          deadline_at?: string | null;
        };
        Update: {
          title?: string;
          description?: string | null;
          amount?: number;
          status?: "pending" | "funded" | "shipped" | "completed" | "disputed" | "cancelled";
          deadline_at?: string | null;
          updated_at?: string;
        };
      };
      disputes: {
        Row: {
          id: string;
          deal_id: string;
          raised_by: string;
          reason: string;
          status: "open" | "reviewing" | "resolved";
          resolution: string | null;
          created_at: string;
          resolved_at: string | null;
        };
        Insert: {
          id?: string;
          deal_id: string;
          raised_by: string;
          reason: string;
          status?: "open" | "reviewing" | "resolved";
          resolution?: string | null;
        };
        Update: {
          status?: "open" | "reviewing" | "resolved";
          resolution?: string | null;
          resolved_at?: string | null;
        };
      };
      transactions: {
        Row: {
          id: string;
          deal_id: string;
          amount: number;
          type: "escrow_in" | "escrow_out" | "refund" | "fee";
          reference: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          deal_id: string;
          amount: number;
          type: "escrow_in" | "escrow_out" | "refund" | "fee";
          reference?: string | null;
        };
        Update: never;
      };
    };
  };
}
