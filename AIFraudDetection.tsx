import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Brain, Eye, MapPin, Clock, CreditCard } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FraudAlert {
  id: string;
  type: 'POS' | 'ATM' | 'Online' | 'Transfer';
  amount: number;
  location: string;
  time: string;
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  blocked: boolean;
}

export const AIFraudDetection = () => {
  const [alerts, setAlerts] = useState<FraudAlert[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate real-time fraud detection
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const newAlert: FraudAlert = {
          id: Date.now().toString(),
          type: ['POS', 'ATM', 'Online', 'Transfer'][Math.floor(Math.random() * 4)] as any,
          amount: Math.floor(Math.random() * 50000) + 1000,
          location: ['Lagos', 'Abuja', 'Port Harcourt', 'Kano'][Math.floor(Math.random() * 4)],
          time: new Date().toLocaleTimeString(),
          riskLevel: ['Low', 'Medium', 'High', 'Critical'][Math.floor(Math.random() * 4)] as any,
          blocked: Math.random() > 0.3,
        };
        
        setAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
        
        if (newAlert.riskLevel === 'Critical' || newAlert.riskLevel === 'High') {
          toast({
            title: 'Fraud Alert!',
            description: `Suspicious ${newAlert.type} transaction of ₦${newAlert.amount.toLocaleString()} detected`,
            variant: 'destructive',
          });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [toast]);

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Low': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-blue-500" />
            AI Fraud Detection System
          </CardTitle>
          <CardDescription>
            Real-time monitoring and prevention of unauthorized transactions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span className="text-sm">Status: </span>
              <Badge variant={isMonitoring ? "default" : "secondary"}>
                {isMonitoring ? "Active Monitoring" : "Paused"}
              </Badge>
            </div>
            <Button
              onClick={() => setIsMonitoring(!isMonitoring)}
              variant={isMonitoring ? "destructive" : "default"}
              size="sm"
            >
              {isMonitoring ? "Pause" : "Resume"} Monitoring
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-700">Transactions Blocked</h4>
              <p className="text-2xl font-bold text-green-800">247</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-700">Amount Saved</h4>
              <p className="text-2xl font-bold text-blue-800">₦2.4M</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-700">Detection Rate</h4>
              <p className="text-2xl font-bold text-purple-800">99.7%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Fraud Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alerts.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No recent alerts</p>
            ) : (
              alerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="font-medium">
                        {alert.type} Transaction - ₦{alert.amount.toLocaleString()}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-3 w-3" />
                        <span>{alert.location}</span>
                        <Clock className="h-3 w-3 ml-2" />
                        <span>{alert.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getRiskColor(alert.riskLevel)}>
                      {alert.riskLevel}
                    </Badge>
                    <Badge variant={alert.blocked ? "destructive" : "secondary"}>
                      {alert.blocked ? "Blocked" : "Allowed"}
                    </Badge>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};