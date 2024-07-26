export interface Region {
  region: string
  countries: {
    name: string
    '$ref': string
  }[]
}
