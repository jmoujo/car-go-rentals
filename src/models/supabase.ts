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
      bookings: {
        Row: {
          car_id: number | null;
          created_at: string;
          id: number;
          pickupDate: string | null;
          provider_id: string | null;
          returnDate: string | null;
          totalPrice: number | null;
          user_id: string | null;
        };
        Insert: {
          car_id?: number | null;
          created_at?: string;
          id?: number;
          pickupDate?: string | null;
          provider_id?: string | null;
          returnDate?: string | null;
          totalPrice?: number | null;
          user_id?: string | null;
        };
        Update: {
          car_id?: number | null;
          created_at?: string;
          id?: number;
          pickupDate?: string | null;
          provider_id?: string | null;
          returnDate?: string | null;
          totalPrice?: number | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'bookings_car_id_fkey';
            columns: ['car_id'];
            referencedRelation: 'cars';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'bookings_provider_id_fkey';
            columns: ['provider_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'bookings_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
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
          images: string[] | null;
          make: string | null;
          maximumRentalPeriodInDays: number | null;
          minimumRentalPeriodInDays: number | null;
          model: string | null;
          numberOfBags: number | null;
          numberOfDoors: number | null;
          otherFeatures: string[] | null;
          pricePerDay: number | null;
          provider_id: string | null;
          seatingCapacity: number | null;
          status: string | null;
          transmission: string | null;
          type: string | null;
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
          images?: string[] | null;
          make?: string | null;
          maximumRentalPeriodInDays?: number | null;
          minimumRentalPeriodInDays?: number | null;
          model?: string | null;
          numberOfBags?: number | null;
          numberOfDoors?: number | null;
          otherFeatures?: string[] | null;
          pricePerDay?: number | null;
          provider_id?: string | null;
          seatingCapacity?: number | null;
          status?: string | null;
          transmission?: string | null;
          type?: string | null;
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
          images?: string[] | null;
          make?: string | null;
          maximumRentalPeriodInDays?: number | null;
          minimumRentalPeriodInDays?: number | null;
          model?: string | null;
          numberOfBags?: number | null;
          numberOfDoors?: number | null;
          otherFeatures?: string[] | null;
          pricePerDay?: number | null;
          provider_id?: string | null;
          seatingCapacity?: number | null;
          status?: string | null;
          transmission?: string | null;
          type?: string | null;
          year?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'cars_provider_id_fkey';
            columns: ['provider_id'];
            referencedRelation: 'users';
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
      regions: {
        Row: {
          country_id: number | null;
          created_at: string;
          displayName: string | null;
          id: number;
          latitude: number | null;
          longitude: number | null;
        };
        Insert: {
          country_id?: number | null;
          created_at?: string;
          displayName?: string | null;
          id?: number;
          latitude?: number | null;
          longitude?: number | null;
        };
        Update: {
          country_id?: number | null;
          created_at?: string;
          displayName?: string | null;
          id?: number;
          latitude?: number | null;
          longitude?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'regions_country_id_fkey';
            columns: ['country_id'];
            referencedRelation: 'countries';
            referencedColumns: ['id'];
          }
        ];
      };
      reviews: {
        Row: {
          carId: number | null;
          comment: string | null;
          created_at: string;
          dislikes: number | null;
          id: number;
          likes: number | null;
          provider_id: string | null;
          rate: number | null;
          user_id: string | null;
        };
        Insert: {
          carId?: number | null;
          comment?: string | null;
          created_at?: string;
          dislikes?: number | null;
          id?: number;
          likes?: number | null;
          provider_id?: string | null;
          rate?: number | null;
          user_id?: string | null;
        };
        Update: {
          carId?: number | null;
          comment?: string | null;
          created_at?: string;
          dislikes?: number | null;
          id?: number;
          likes?: number | null;
          provider_id?: string | null;
          rate?: number | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'reviews_carId_fkey';
            columns: ['carId'];
            referencedRelation: 'cars';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'reviews_provider_id_fkey';
            columns: ['provider_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'reviews_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
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
