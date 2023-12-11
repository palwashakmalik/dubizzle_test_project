// LanguageSelector.tsx
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}


const LanguageSelector = ({ selectedLanguage, onLanguageChange }: LanguageSelectorProps) => {
  return (
    <div>
      <Typography variant="body2">Select Language:</Typography>
      <ToggleButtonGroup value={selectedLanguage} exclusive onChange={(e, value) => onLanguageChange(value)}>
        <ToggleButton value="ar">Arabic</ToggleButton>
        <ToggleButton value="en">English</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default LanguageSelector;
