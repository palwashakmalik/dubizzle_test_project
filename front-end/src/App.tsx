import {
  CircularProgress,
  Container,
  ThemeProvider,
  createTheme,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CssBaseline,
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import LanguageSelector from './components/LanguageSelector';
import ArticleCard from './components/ArticleCard';
import TopicSelector from './components/TopicSelector';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  const fetchArticles = useCallback(async () => {
    try {
      setLoading(true);
      const topicsQueryParam = selectedTopics.map((topic) => `q=${topic}`).join('&');
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}?from=past%207%20days&sortBy=publishedAt&language=${selectedLanguage}&${topicsQueryParam}`
      );

      if (response.ok) {
        const res = await response.json();
        setArticles(res.data.articles);
      } else {
        console.error('Failed to fetch articles');
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  }, [selectedLanguage, selectedTopics]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles, selectedLanguage, selectedTopics]);

  const handleTopicsChange = (updatedTopics: string[]) => {
    setSelectedTopics(updatedTopics);
  };

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
    direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr',
  });


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container style={{ background: theme.palette.background.paper }}>
        <FormControl>
          <InputLabel id="theme-selector-label">Theme</InputLabel>
          <Select
            labelId="theme-selector-label"
            id="theme-selector"
            value={darkMode ? 'dark' : 'light'}
            onChange={handleThemeChange}
          >
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
          </Select>
        </FormControl>
        <LanguageSelector selectedLanguage={selectedLanguage} onLanguageChange={setSelectedLanguage} />
        <TopicSelector onTopicsChange={handleTopicsChange} />
        <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ minHeight: '60vh' }}>
          {loading ? (
            <Grid item>
              <CircularProgress />
            </Grid>
          ) : (
            articles?.map((article, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <ArticleCard article={article} />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
