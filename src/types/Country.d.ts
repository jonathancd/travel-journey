export interface Country {
  code: string;
  flagImg: string;
}

// Discriminated Union Types
export type Tag =
  | {
      show: true;
      isCustomized: true;
      icons: string[];
    }
  | {
      show: true;
      isCustomized?: false;
      icons?: undefined;
    }
  | {
      show: false;
      isCustomized?: false;
      icons?: undefined;
    };

export interface CountryVisited extends Country {
  details: {
    timesVisited: string[];
    livedThere?: boolean;
    tag: Tag;
  };
}

export interface CountryPending extends Country {
  details: {
    placesToGo: string[];
    tag: Tag;
  };
}

export interface OverlayTagProps {
  countryCode: string;
  tag: Tag;
  type: "visited" | "pending";
}

export type TabItem =
  | { type: "visited"; countries: CountryVisited[] }
  | { type: "pending"; countries: CountryPending[] };

// discriminated union
export type CountryCardProps =
  | { type: "visited"; country: CountryVisited }
  | { type: "pending"; country: CountryPending };
