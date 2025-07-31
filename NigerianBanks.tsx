import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Smartphone, Users, Landmark } from 'lucide-react';

const bankCategories = {
  commercial: [
    { name: 'Access Bank', code: '*901#', type: 'Tier 1' },
    { name: 'GTBank', code: '*737#', type: 'Tier 1' },
    { name: 'First Bank', code: '*894#', type: 'Tier 1' },
    { name: 'Zenith Bank', code: '*966#', type: 'Tier 1' },
    { name: 'UBA', code: '*919#', type: 'Tier 1' },
    { name: 'Fidelity Bank', code: '*770#', type: 'Tier 2' },
    { name: 'Union Bank', code: '*826#', type: 'Tier 2' },
    { name: 'Sterling Bank', code: '*822#', type: 'Tier 2' },
  ],
  fintech: [
    { name: 'Opay', code: '*955#', type: 'Digital Payment' },
    { name: 'PalmPay', code: '*861#', type: 'Digital Payment' },
    { name: 'Kuda Bank', code: '*5573#', type: 'Digital Bank' },
    { name: 'Carbon', code: '*1303#', type: 'Digital Bank' },
    { name: 'Flutterwave', code: '*894*911#', type: 'Payment Gateway' },
  ],
  microfinance: [
    { name: 'LAPO MFB', code: '*5050#', type: 'Microfinance' },
    { name: 'AB Microfinance', code: '*9090#', type: 'Microfinance' },
    { name: 'Accion MFB', code: '*5051#', type: 'Microfinance' },
    { name: 'Fortis MFB', code: '*4014#', type: 'Microfinance' },
  ],
  cooperative: [
    { name: 'Alat by Wema', code: '*945*100#', type: 'Cooperative' },
    { name: 'Rubies Bank', code: '*7797#', type: 'Cooperative' },
    { name: 'Mint MFB', code: '*5573*2#', type: 'Cooperative' },
  ]
};

export const NigerianBanks = () => {
  const renderBankCategory = (title: string, icon: any, banks: any[], color: string) => (
    <Card key={title}>
      <CardHeader>
        <CardTitle className={`flex items-center gap-2 ${color}`}>
          {icon}
          {title}
        </CardTitle>
        <CardDescription>
          {banks.length} institutions with emergency blocking support
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {banks.map((bank, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium">{bank.name}</p>
                <p className="text-sm text-gray-600 font-mono">{bank.code}</p>
              </div>
              <Badge variant="outline">{bank.type}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-green-50 to-blue-50">
        <CardHeader>
          <CardTitle className="text-center">Nigerian Financial Institutions</CardTitle>
          <CardDescription className="text-center">
            Comprehensive coverage across all banking sectors in Nigeria
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-blue-600">{bankCategories.commercial.length}</p>
              <p className="text-sm text-gray-600">Commercial Banks</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">{bankCategories.fintech.length}</p>
              <p className="text-sm text-gray-600">Fintech Companies</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-600">{bankCategories.microfinance.length}</p>
              <p className="text-sm text-gray-600">Microfinance Banks</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-600">{bankCategories.cooperative.length}</p>
              <p className="text-sm text-gray-600">Cooperative Banks</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {renderBankCategory(
        'Commercial Banks',
        <Building2 className="h-5 w-5" />,
        bankCategories.commercial,
        'text-blue-700'
      )}

      {renderBankCategory(
        'Fintech & Digital Banks',
        <Smartphone className="h-5 w-5" />,
        bankCategories.fintech,
        'text-green-700'
      )}

      {renderBankCategory(
        'Microfinance Banks',
        <Users className="h-5 w-5" />,
        bankCategories.microfinance,
        'text-purple-700'
      )}

      {renderBankCategory(
        'Cooperative Banks',
        <Landmark className="h-5 w-5" />,
        bankCategories.cooperative,
        'text-orange-700'
      )}
    </div>
  );
};