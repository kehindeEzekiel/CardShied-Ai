import React from 'react';
import { Shield, Lock, Eye, Fingerprint, Zap, Globe, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AdvancedSecurity: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="shadow-lg border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Fingerprint className="w-6 h-6 text-blue-500" />
              Biometric Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Fingerprint Auth</span>
              <Badge variant="secondary">Active</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Face Recognition</span>
              <Badge variant="secondary">Active</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Voice Recognition</span>
              <Badge variant="outline">Available</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Iris Scanning</span>
              <Badge variant="outline">Premium</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Zap className="w-6 h-6 text-green-500" />
              AI Protection
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Fraud Detection</span>
              <Badge variant="secondary">24/7</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Behavioral Analysis</span>
              <Badge variant="secondary">Learning</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Risk Assessment</span>
              <Badge variant="secondary">Real-time</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Pattern Recognition</span>
              <Badge variant="secondary">Advanced</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Globe className="w-6 h-6 text-purple-500" />
              Network Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">End-to-End Encryption</span>
              <Badge variant="secondary">AES-256</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">VPN Protection</span>
              <Badge variant="secondary">Active</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">SSL/TLS Security</span>
              <Badge variant="secondary">v1.3</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Firewall Protection</span>
              <Badge variant="secondary">Multi-layer</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-red-500" />
            Security Protocols & Compliance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800">Authentication Layers</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500" />
                  Something you know (PIN/Password)
                </li>
                <li className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-green-500" />
                  Something you have (Phone/Token)
                </li>
                <li className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-purple-500" />
                  Something you are (Biometrics)
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-orange-500" />
                  Somewhere you are (Location)
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800">Compliance Standards</h4>
              <div className="grid grid-cols-2 gap-2">
                <Badge variant="outline">PCI DSS</Badge>
                <Badge variant="outline">ISO 27001</Badge>
                <Badge variant="outline">SOC 2</Badge>
                <Badge variant="outline">GDPR</Badge>
                <Badge variant="outline">CCPA</Badge>
                <Badge variant="outline">FIDO2</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdvancedSecurity;