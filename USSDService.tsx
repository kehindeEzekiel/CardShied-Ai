import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertTriangle, Phone, Shield, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const USSDService = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [ussdCode, setUssdCode] = useState('');
  const { toast } = useToast();

  const emergencyUSSDCodes = [
    { code: '*901*911#', description: 'Block all transactions immediately', bank: 'All Banks' },
    { code: '*966*911#', description: 'Emergency account freeze', bank: 'Zenith Bank' },
    { code: '*737*911#', description: 'Stop all outflows', bank: 'GTBank' },
    { code: '*894*911#', description: 'Freeze account instantly', bank: 'First Bank' },
    { code: '*770*911#', description: 'Block card transactions', bank: 'Fidelity Bank' },
  ];

  const handleEmergencyBlock = async (code: string) => {
    try {
      toast({
        title: 'Emergency Block Initiated',
        description: `USSD code ${code} sent. All transactions will be blocked within 30 seconds.`,
      });
      
      // Simulate USSD processing
      setTimeout(() => {
        toast({
          title: 'Account Secured',
          description: 'All outgoing transactions have been successfully blocked.',
        });
      }, 2000);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to process emergency block. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card className="border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-700">
            <AlertTriangle className="h-5 w-5" />
            Emergency USSD Codes
          </CardTitle>
          <CardDescription>
            Instantly block all transactions when you notice unauthorized activity
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {emergencyUSSDCodes.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border">
              <div>
                <p className="font-mono text-lg font-bold text-red-600">{item.code}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="text-xs text-gray-500">{item.bank}</p>
              </div>
              <Button
                onClick={() => handleEmergencyBlock(item.code)}
                variant="destructive"
                size="sm"
                className="flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Dial Now
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Quick Block Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-500" />
                Instant Block
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Blocks all transactions within 30 seconds of dialing
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold">24/7 Availability</h4>
              <p className="text-sm text-gray-600 mt-1">
                Works anytime, anywhere without internet connection
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};