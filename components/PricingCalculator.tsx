import React, { useState } from 'react';
import { Button } from './Button';

interface PricingCalculatorProps {
  onCalculate?: (total: number) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ onCalculate }) => {
  const [users, setUsers] = useState(1);
  const [features, setFeatures] = useState<string[]>([]);
  const [plan, setPlan] = useState('starter');

  const basePrices = {
    starter: 29,
    professional: 79,
    enterprise: 199
  };

  const featurePrices = {
    'ai-branding': 10,
    'advanced-analytics': 15,
    'custom-models': 25,
    'api-access': 20,
    'white-label': 50
  };

  const calculateTotal = () => {
    const basePrice = basePrices[plan as keyof typeof basePrices];
    const featureTotal = features.reduce((sum, feature) => sum + (featurePrices[feature as keyof typeof featurePrices] || 0), 0);
    const total = basePrice + featureTotal;
    onCalculate?.(total);
    return total;
  };

  const toggleFeature = (feature: string) => {
    setFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  return (
    <div className="bg-white/80 rounded-2xl shadow-lg p-8 backdrop-blur-md">
      <h3 className="text-2xl font-bold mb-6 text-center">Pricing Calculator</h3>
      
      <div className="space-y-6">
        {/* Plan Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">Select Plan</label>
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(basePrices).map(([key, price]) => (
              <button
                key={key}
                onClick={() => setPlan(key)}
                className={`p-3 rounded-lg border transition ${
                  plan === key 
                    ? 'border-blue-500 bg-blue-50 text-blue-700' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-semibold capitalize">{key}</div>
                <div className="text-sm text-gray-600">${price}/mo</div>
              </button>
            ))}
          </div>
        </div>

        {/* User Count */}
        <div>
          <label className="block text-sm font-medium mb-2">Number of Users</label>
          <input
            type="range"
            min="1"
            max="100"
            value={users}
            onChange={(e) => setUsers(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="text-center text-sm text-gray-600 mt-1">{users} users</div>
        </div>

        {/* Additional Features */}
        <div>
          <label className="block text-sm font-medium mb-2">Additional Features</label>
          <div className="space-y-2">
            {Object.entries(featurePrices).map(([feature, price]) => (
              <label key={feature} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={features.includes(feature)}
                  onChange={() => toggleFeature(feature)}
                  className="rounded"
                />
                <span className="flex-1 capitalize">{feature.replace('-', ' ')}</span>
                <span className="text-sm text-gray-600">+${price}/mo</span>
              </label>
            ))}
          </div>
        </div>

        {/* Total */}
        <div className="border-t pt-4">
          <div className="flex justify-between items-center text-xl font-bold">
            <span>Total:</span>
            <span>${calculateTotal()}/month</span>
          </div>
          <Button 
            variant="primary" 
            size="md" 
            className="w-full mt-4"
            onClick={() => alert(`Total: $${calculateTotal()}/month`)}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}; 