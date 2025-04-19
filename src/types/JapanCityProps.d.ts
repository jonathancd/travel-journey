export interface JapanCity  {
    id: number,
    background: string,
    name: string,
}

export interface JapanCityProps  {
    index: number,
    city: JapanCity,
    totalCities: number,
}