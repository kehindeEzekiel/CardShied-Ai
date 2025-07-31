import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const countries = [
  { code: 'NG', name: 'Nigeria', currency: '₦', flag: '🇳🇬' },
  { code: 'US', name: 'United States', currency: '$', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', currency: '£', flag: '🇬🇧' },
  { code: 'CA', name: 'Canada', currency: 'C$', flag: '🇨🇦' },
  { code: 'GH', name: 'Ghana', currency: '₵', flag: '🇬🇭' },
  { code: 'KE', name: 'Kenya', currency: 'KSh', flag: '🇰🇪' },
  { code: 'ZA', name: 'South Africa', currency: 'R', flag: '🇿🇦' },
  { code: 'IN', name: 'India', currency: '₹', flag: '🇮🇳' },
  { code: 'AU', name: 'Australia', currency: 'A$', flag: '🇦🇺' },
  { code: 'DE', name: 'Germany', currency: '€', flag: '🇩🇪' },
  { code: 'FR', name: 'France', currency: '€', flag: '🇫🇷' },
  { code: 'BR', name: 'Brazil', currency: 'R$', flag: '🇧🇷' },
];

interface CountrySelectorProps {
  value?: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
}

export const CountrySelector = ({ value, onValueChange, placeholder = "Select country" }: CountrySelectorProps) => {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {countries.map((country) => (
          <SelectItem key={country.code} value={country.code}>
            <div className="flex items-center gap-2">
              <span>{country.flag}</span>
              <span>{country.name}</span>
              <span className="text-gray-500">({country.currency})</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export const getCurrencySymbol = (countryCode: string): string => {
  const country = countries.find(c => c.code === countryCode);
  return country?.currency || '₦';
};

export const getCountryName = (countryCode: string): string => {
  const country = countries.find(c => c.code === countryCode);
  return country?.name || 'Nigeria';
};