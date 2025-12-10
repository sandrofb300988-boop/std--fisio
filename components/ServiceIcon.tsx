
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
  HandHeart,
  LucideProps
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

interface ServiceIconProps extends LucideProps {
  iconKey: string;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ iconKey, ...props }) => {
  const IconComponent = iconMap[iconKey] || CheckCircle;
  return <IconComponent {...props} />;
};

export default ServiceIcon;