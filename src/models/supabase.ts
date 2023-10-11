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
          status: string | null;
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
          status: string | null;
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
          status: string | null;
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
            referencedRelation: 'providers';
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
          country_id: number | null;
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
          region_id: number | null;
          seatingCapacity: number | null;
          slug: string | null;
          status: string | null;
          transmission: string | null;
          type: string | null;
          year: number | null;
        };
        Insert: {
          acAvailable?: boolean | null;
          acWorking?: boolean | null;
          color?: string | null;
          country_id?: number | null;
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
          region_id?: number | null;
          seatingCapacity?: number | null;
          slug?: string | null;
          status?: string | null;
          transmission?: string | null;
          type?: string | null;
          year?: number | null;
        };
        Update: {
          acAvailable?: boolean | null;
          acWorking?: boolean | null;
          color?: string | null;
          country_id?: number | null;
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
          region_id?: number | null;
          seatingCapacity?: number | null;
          slug?: string | null;
          status?: string | null;
          transmission?: string | null;
          type?: string | null;
          year?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'cars_country_id_fkey';
            columns: ['country_id'];
            referencedRelation: 'countries';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'cars_provider_id_fkey';
            columns: ['provider_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'cars_region_id_fkey';
            columns: ['region_id'];
            referencedRelation: 'regions';
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
      providers: {
        Row: {
          avatar: string | null;
          businessRegistrationNumber: string | null;
          city: string | null;
          companyName: string | null;
          contactName: string | null;
          country_id: number | null;
          created_at: string;
          email: string | null;
          id: string;
          latitude: number | null;
          longitude: number | null;
          phone: string | null;
          region_id: number | null;
          street: string | null;
        };
        Insert: {
          avatar?: string | null;
          businessRegistrationNumber?: string | null;
          city?: string | null;
          companyName?: string | null;
          contactName?: string | null;
          country_id?: number | null;
          created_at?: string;
          email?: string | null;
          id: string;
          latitude?: number | null;
          longitude?: number | null;
          phone?: string | null;
          region_id?: number | null;
          street?: string | null;
        };
        Update: {
          avatar?: string | null;
          businessRegistrationNumber?: string | null;
          city?: string | null;
          companyName?: string | null;
          contactName?: string | null;
          country_id?: number | null;
          created_at?: string;
          email?: string | null;
          id?: string;
          latitude?: number | null;
          longitude?: number | null;
          phone?: string | null;
          region_id?: number | null;
          street?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'providers_country_id_fkey';
            columns: ['country_id'];
            referencedRelation: 'countries';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'providers_id_fkey';
            columns: ['id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'providers_region_id_fkey';
            columns: ['region_id'];
            referencedRelation: 'regions';
            referencedColumns: ['id'];
          }
        ];
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
          car_id: number | null;
          comment: string | null;
          created_at: string;
          dislikes: number | null;
          id: string;
          likes: number | null;
          provider_id: string | null;
          rate: number | null;
          user_id: string | null;
        };
        Insert: {
          car_id?: number | null;
          comment?: string | null;
          created_at?: string;
          dislikes?: number | null;
          id?: string;
          likes?: number | null;
          provider_id?: string | null;
          rate?: number | null;
          user_id?: string | null;
        };
        Update: {
          car_id?: number | null;
          comment?: string | null;
          created_at?: string;
          dislikes?: number | null;
          id?: string;
          likes?: number | null;
          provider_id?: string | null;
          rate?: number | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'reviews_car_id_fkey';
            columns: ['car_id'];
            referencedRelation: 'cars';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'reviews_provider_id_fkey';
            columns: ['provider_id'];
            referencedRelation: 'providers';
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
      users: {
        Row: {
          avatar: string | null;
          city: string | null;
          country_id: number | null;
          created_at: string;
          dateOfBirth: string | null;
          email: string | null;
          firstName: string | null;
          gender: string | null;
          id: string;
          lastName: string | null;
          latitude: number | null;
          longitude: number | null;
          phone: string | null;
          region_id: number | null;
          street: string | null;
        };
        Insert: {
          avatar?: string | null;
          city?: string | null;
          country_id?: number | null;
          created_at?: string;
          dateOfBirth?: string | null;
          email?: string | null;
          firstName?: string | null;
          gender?: string | null;
          id: string;
          lastName?: string | null;
          latitude?: number | null;
          longitude?: number | null;
          phone?: string | null;
          region_id?: number | null;
          street?: string | null;
        };
        Update: {
          avatar?: string | null;
          city?: string | null;
          country_id?: number | null;
          created_at?: string;
          dateOfBirth?: string | null;
          email?: string | null;
          firstName?: string | null;
          gender?: string | null;
          id?: string;
          lastName?: string | null;
          latitude?: number | null;
          longitude?: number | null;
          phone?: string | null;
          region_id?: number | null;
          street?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'users_country_id_fkey';
            columns: ['country_id'];
            referencedRelation: 'countries';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'users_id_fkey';
            columns: ['id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'users_region_id_fkey';
            columns: ['region_id'];
            referencedRelation: 'regions';
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
