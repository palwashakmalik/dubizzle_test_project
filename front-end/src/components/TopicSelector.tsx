// TopicSelector.tsx
import { Chip, Box, Typography } from '@mui/material';
import { useState } from 'react';

interface TopicSelectorProps {
  onTopicsChange: (selectedTopics: string[]) => void;
}

const topicsList = ['Netflix', 'Google', 'Meta', 'Facebook', 'Apple', 'Twitter', 'Tesla'];



const TopicSelector = ({ onTopicsChange }: TopicSelectorProps) => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const handleChipClick = (topic: string) => {
    const updatedTopics = selectedTopics.includes(topic)
      ? selectedTopics.filter((selectedTopic) => selectedTopic !== topic)
      : [...selectedTopics, topic];

    setSelectedTopics(updatedTopics);
    onTopicsChange(updatedTopics);
  };

  return (
    <Box>
      <Typography variant="body2">Select Topics:</Typography>
      {topicsList.map((topic) => (
        <Chip
          key={topic}
          label={topic}
          clickable
          onClick={() => handleChipClick(topic)}
        />
      ))}
    </Box>
  );
};

export default TopicSelector;
