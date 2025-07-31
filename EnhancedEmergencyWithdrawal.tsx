import React, { useState } from 'react';
import { Smartphone, QrCode, Shield, Clock, CheckCircle, AlertCircle, MapPin, CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

const EnhancedEmergencyWithdrawal: React.FC = () => {
  const [activeMethod, setActiveMethod] = useState<string>('mobile');
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [emergencyCode, setEmergencyCode] = useState('');

  const handlePhoneSubmit = () => {
    if (phoneNumber.length >= 10) {
      setStep(2);
    }
  };

  const handleOtpSubmit = () => {
    if (otp.length === 6) {
      setStep(3);
      setEmergencyCode(`ATM-${Math.floor(1000 + Math.random() * 9000)}`);
    }
  };

  const emergencyMethods = [
    {
      id: 'mobile',
      name: 'Mobile App',
      icon: Smartphone,
      color: 'blue',
      limit: '$500',
      time: '5 minutes'
    },
    {
      id: 'qr',
      name: 'QR Code',
      icon: QrCode,
      color: 'green',
      limit: '$300',
      time: '2 minutes'
    },
    {
      id: 'branch',
      name: 'Branch Visit',
      icon: MapPin,
      color: 'purple',
      limit: '$2000',
      time: 'Immediate'
    },
    {
      id: 'temp',
      name: 'Temp Card',
      icon: CreditCard,
      color: 'orange',
      limit: '$1000',
      time: '1 hour'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Enhanced Emergency Access</h2>
        <p className="text-gray-600">Multiple secure methods to access your funds without your ATM card</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {emergencyMethods.map((method) => {
          const IconComponent = method.icon;
          return (
            <Card 
              key={method.id}
              className={`cursor-pointer transition-all ${
                activeMethod === method.id 
                  ? `border-${method.color}-500 shadow-lg` 
                  : 'hover:shadow-md'
              }`}
              onClick={() => setActiveMethod(method.id)}
            >
              <CardContent className="p-4 text-center">
                <IconComponent className={`w-8 h-8 text-${method.color}-500 mx-auto mb-2`} />
                <h3 className="font-semibold text-sm">{method.name}</h3>
                <Badge variant="outline" className="mt-1 text-xs">
                  {method.limit}
                </Badge>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="w-6 h-6 text-blue-500" />
              {activeMethod === 'mobile' && 'Mobile App Verification'}
              {activeMethod === 'qr' && 'QR Code Generation'}
              {activeMethod === 'branch' && 'Branch Verification'}
              {activeMethod === 'temp' && 'Temporary Card Request'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeMethod === 'mobile' && (
              <>
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="phone">Registered Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <Button onClick={handlePhoneSubmit} className="w-full">
                      Send Secure OTP
                    </Button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <Alert>
                      <Clock className="h-4 w-4" />
                      <AlertDescription>
                        Encrypted OTP sent to {phoneNumber}. Valid for 5 minutes.
                      </AlertDescription>
                    </Alert>
                    <div>
                      <Label htmlFor="otp">Enter 6-digit OTP</Label>
                      <Input
                        id="otp"
                        type="text"
                        placeholder="123456"
                        maxLength={6}
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                      />
                    </div>
                    <Button onClick={handleOtpSubmit} className="w-full">
                      Verify & Generate Code
                    </Button>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4 text-center">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                    <h3 className="text-lg font-semibold text-green-600">Verification Successful!</h3>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">Emergency Withdrawal Code:</p>
                      <p className="text-2xl font-bold text-gray-900">{emergencyCode}</p>
                    </div>
                    <Alert>
                      <Shield className="h-4 w-4" />
                      <AlertDescription>
                        Valid for 30 minutes at any ATM. Max: $500. Biometric verification required.
                      </AlertDescription>
                    </Alert>
                  </div>
                )}
              </>
            )}

            {activeMethod === 'qr' && (
              <div className="space-y-4 text-center">
                <div className="bg-gray-100 p-8 rounded-lg">
                  <QrCode className="w-24 h-24 mx-auto text-gray-400" />
                  <p className="text-sm text-gray-600 mt-2">QR Code will appear here</p>
                </div>
                <Button className="w-full">Generate QR Code</Button>
                <Alert>
                  <Clock className="h-4 w-4" />
                  <AlertDescription>
                    QR codes expire in 10 minutes for security. Max withdrawal: $300
                  </AlertDescription>
                </Alert>
              </div>
            )}

            {activeMethod === 'branch' && (
              <div className="space-y-4">
                <Alert>
                  <MapPin className="h-4 w-4" />
                  <AlertDescription>
                    Visit any branch with valid government ID for immediate assistance
                  </AlertDescription>
                </Alert>
                <div className="space-y-2">
                  <h4 className="font-semibold">Required Documents:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Government-issued photo ID</li>
                    <li>• Account number or SSN</li>
                    <li>• Security questions verification</li>
                  </ul>
                </div>
                <Button className="w-full">Find Nearest Branch</Button>
              </div>
            )}

            {activeMethod === 'temp' && (
              <div className="space-y-4">
                <Alert>
                  <CreditCard className="h-4 w-4" />
                  <AlertDescription>
                    Request a temporary card for emergency use
                  </AlertDescription>
                </Alert>
                <div className="space-y-2">
                  <h4 className="font-semibold">Temporary Card Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Valid for 7 days</li>
                    <li>• $1000 daily limit</li>
                    <li>• Domestic use only</li>
                    <li>• Instant digital delivery</li>
                  </ul>
                </div>
                <Button className="w-full">Request Temporary Card</Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-red-500" />
              Security & Limits
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Daily Emergency Limits</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Mobile App</span>
                  <Badge>$500</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">QR Code</span>
                  <Badge>$300</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Branch Visit</span>
                  <Badge>$2,000</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Temp Card</span>
                  <Badge>$1,000</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Security Measures</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Real-time fraud monitoring
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Geolocation verification
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Multi-factor authentication
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Instant notifications
                </li>
              </ul>
            </div>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Emergency Hotline:</strong> 1-800-BANK-HELP (24/7 support)
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnhancedEmergencyWithdrawal;