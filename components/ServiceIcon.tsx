import React from 'react';
import { 
  CheckCircle, 
  Stethoscope, 
  GraduationCap, 
  Dumbbell, 
  Activity, 
  HeartPulse, 
  Baby, 
  UserCheck, 
  HandHeart
} from 'lucide-react';

export const iconMap: Record<string, React.ElementType> = {
  'stethoscope': Stethoscope,
  'graduation': GraduationCap,
  'dumbbell': Dumbbell,
  'activity': Activity,
  'heart-pulse': HeartPulse,
  'baby': Baby,
  'scan-person': UserCheck,
  'hand-heart': HandHeart
};

// Use standard React SVG props to avoid import errors with LucideProps in some environments
interface ServiceIconProps extends React.SVGProps<SVGSVGElement> {
  iconKey: string;
  size?: string | number;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ iconKey, size, ...props }) => {
  const IconComponent = iconMap[iconKey] || CheckCircle;
  // Pass size explicitly if provided, otherwise let className or default handle it
  return <IconComponent size={size} {...props} />;
};

export default ServiceIcon;