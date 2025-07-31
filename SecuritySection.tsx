import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, Phone, CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import AdvancedSecurity from './AdvancedSecurity';

const SecuritySection: React.FC = () => {
  return (
    <section id="security" className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Shield className="w-20 h-20 text-red-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Advanced Security Measures
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multi-layered security protocols with AI-powered fraud detection and biometric authentication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-6 h-6 text-red-500" />
                Core Security Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Eye className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Multi-Modal Biometrics</h4>
                  <p className="text-sm text-gray-600">Fingerprint, facial, voice, and iris recognition</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-green-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Zero-Trust Architecture</h4>
                  <p className="text-sm text-gray-600">Continuous verification and least-privilege access</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-500 mt-1" />
                <div>
                  <h4 className="font-semibold">AI Threat Detection</h4>
                  <p className="text-sm text-gray-600">Machine learning-powered anomaly detection</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-orange-500" />
                Emergency Response
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>24/7 Emergency Hotline:</strong> 1-800-BANK-HELP
                </AlertDescription>
              </Alert>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Instant Card Blocking</h4>
                    <p className="text-sm text-gray-600">Immediate card deactivation via app or call</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Emergency Fund Access</h4>
                    <p className="text-sm text-gray-600">Multiple secure methods for cardless withdrawals</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <AdvancedSecurity />
      </div>
    </section>
  );
};

export default SecuritySection;