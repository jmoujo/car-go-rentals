export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      'car-types': {
        Row: {
          created_at: string;
          displayName: string | null;
          id: number;
          imageUrl: string | null;
          name: string | null;
        };
        Insert: {
          created_at?: string;
          displayName?: string | null;
          id?: number;
          imageUrl?: string | null;
          name?: string | null;
        };
        Update: {
          created_at?: string;
          displayName?: string | null;
          id?: number;
          imageUrl?: string | null;
          name?: string | null;
        };
        Relationships: [];
      };
      cars: {
        Row: {
          acAvailable: boolean | null;
          acWorking: boolean | null;
          color: string | null;
          created_at: string;
          description: string | null;
          engineCapacity: string | null;
          fuelType: string | null;
          id: number;
          mainImage: string | null;
          make: string | null;
          model: string | null;
          numberOfBags: number | null;
          numberOfDoors: number | null;
          otherImages: string[] | null;
          providerId: number | null;
          seatingCapacity: number | null;
          transmission: string | null;
          typeId: number | null;
          year: number | null;
        };
        Insert: {
          acAvailable?: boolean | null;
          acWorking?: boolean | null;
          color?: string | null;
          created_at?: string;
          description?: string | null;
          engineCapacity?: string | null;
          fuelType?: string | null;
          id?: number;
          mainImage?: string | null;
          make?: string | null;
          model?: string | null;
          numberOfBags?: number | null;
          numberOfDoors?: number | null;
          otherImages?: string[] | null;
          providerId?: number | null;
          seatingCapacity?: number | null;
          transmission?: string | null;
          typeId?: number | null;
          year?: number | null;
        };
        Update: {
          acAvailable?: boolean | null;
          acWorking?: boolean | null;
          color?: string | null;
          created_at?: string;
          description?: string | null;
          engineCapacity?: string | null;
          fuelType?: string | null;
          id?: number;
          mainImage?: string | null;
          make?: string | null;
          model?: string | null;
          numberOfBags?: number | null;
          numberOfDoors?: number | null;
          otherImages?: string[] | null;
          providerId?: number | null;
          seatingCapacity?: number | null;
          transmission?: string | null;
          typeId?: number | null;
          year?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'cars_providerId_fkey';
            columns: ['providerId'];
            referencedRelation: 'providers';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'cars_typeId_fkey';
            columns: ['typeId'];
            referencedRelation: 'car-types';
            referencedColumns: ['id'];
          }
        ];
      };
      countries: {
        Row: {
          created_at: string;
          displayName: string | null;
          id: number;
          latitude: number | null;
          longitude: number | null;
        };
        Insert: {
          created_at?: string;
          displayName?: string | null;
          id?: number;
          latitude?: number | null;
          longitude?: number | null;
        };
        Update: {
          created_at?: string;
          displayName?: string | null;
          id?: number;
          latitude?: number | null;
          longitude?: number | null;
        };
        Relationships: [];
      };
      providers: {
        Row: {
          businessRegistrationNumber: string | null;
          city: string | null;
          companyName: string | null;
          contactName: string | null;
          country: number | null;
          created_at: string;
          email: string | null;
          id: number;
          latitude: number | null;
          longitude: number | null;
          phone: string | null;
          profileUrl: string | null;
          region: number | null;
          street: string | null;
        };
        Insert: {
          businessRegistrationNumber?: string | null;
          city?: string | null;
          companyName?: string | null;
          contactName?: string | null;
          country?: number | null;
          created_at?: string;
          email?: string | null;
          id?: number;
          latitude?: number | null;
          longitude?: number | null;
          phone?: string | null;
          profileUrl?: string | null;
          region?: number | null;
          street?: string | null;
        };
        Update: {
          businessRegistrationNumber?: string | null;
          city?: string | null;
          companyName?: string | null;
          contactName?: string | null;
          country?: number | null;
          created_at?: string;
          email?: string | null;
          id?: number;
          latitude?: number | null;
          longitude?: number | null;
          phone?: string | null;
          profileUrl?: string | null;
          region?: number | null;
          street?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'providers_country_fkey';
            columns: ['country'];
            referencedRelation: 'countries';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'providers_region_fkey';
            columns: ['region'];
            referencedRelation: 'regions';
            referencedColumns: ['id'];
          }
        ];
      };
      regions: {
        Row: {
          created_at: string;
          displayName: string | null;
          id: number;
          latitude: number | null;
          longitude: number | null;
          name: string | null;
        };
        Insert: {
          created_at?: string;
          displayName?: string | null;
          id?: number;
          latitude?: number | null;
          longitude?: number | null;
          name?: string | null;
        };
        Update: {
          created_at?: string;
          displayName?: string | null;
          id?: number;
          latitude?: number | null;
          longitude?: number | null;
          name?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
