import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import NewsCard from '../components/NewsCard';
import Footer from '../components/Footer';
import { TextField, InputAdornment, IconButton, Button } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const newsData = [
  {
    id: "1",
    title: "Naval Hackathon, Swavlamban 2024",
    content: `
      <p>Congratulations to our Champions!</p><br />
      <p>We are thrilled to announce that Mr.Jansty Lewis and Ms.Noorin Nasir Khot, talented students of <strong>IIIT Kota</strong>, have secured the first position in the prestigious Naval Hackathon, Swavlamban 2024.</p><br />
      <p>Under the expert mentorship of Dr. Gyan Singh Yadav, their innovative solutions stood out among fierce competition. They were honored by the Honorable Defense Minister during the award ceremony held on October 29th, 2024, at the esteemed Bharat Mandapam, New Delhi.</p><br />
      <p>Join us in celebrating their remarkable achievement and inspiring dedication!</p>
    `,
    referenceLink: "https://example.com/alumni-meet-2023",
    postedOn: "2023-10-01",
  },
  {
    id: "2",
    title: "New Research Lab Inauguration",
    content: `
      <p>A new state-of-the-art research lab was inaugurated in the campus.</p>
      <p>This lab will focus on cutting-edge research in artificial intelligence and machine learning.</p>
    `,
    referenceLink: "https://example.com/research-lab",
    postedOn: "2023-09-15",
  },
  {
    id: "3",
    title: "Placement Drive 2023",
    content: `
      <p>The placement drive for the year 2023 saw a record number of job offers.</p>
      <p>Top companies from various industries participated and offered lucrative packages to our students.</p>
    `,
    referenceLink: "https://example.com/placement-drive-2023",
    postedOn: "2023-08-20",
  },
  {
    id: "4",
    title: "Workshop on AI and ML",
    content: `
      <p>A workshop on Artificial Intelligence and Machine Learning was conducted.</p>
      <p>Experts from the industry shared their knowledge and insights with the participants.</p>
    `,
    referenceLink: "https://example.com/ai-ml-workshop",
    postedOn: "2023-07-10",
  },
  {
    id: "5",
    title: "Annual Sports Meet",
    content: `
      <p>The annual sports meet concluded with great enthusiasm and participation.</p>
      <p>Students showcased their athletic skills and competed in various sports events.</p>
    `,
    referenceLink: "https://example.com/sports-meet",
    postedOn: "2023-06-05",
  },
];

const News = () => {
  const { newsId } = useParams();
  const [searchInput, setSearchInput] = useState("");
  const [filteredNews, setFilteredNews] = useState(newsData);

  useEffect(() => {
    if (newsId) {
      setTimeout(() => {
        const element = document.getElementById(newsId);
        if (element) {
          const yOffset = -180; // Adjust this value to offset the scroll position
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 0);
    }
  }, [newsId]);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    const filtered = newsData.filter(news => {
      const keyword = searchInput.toLowerCase();
      return news.title.toLowerCase().includes(keyword) || news.content.toLowerCase().includes(keyword);
    });
    setFilteredNews(filtered);
  };

  const handleSearchKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setSearchInput("");
    setFilteredNews(newsData);
  };

  return (
    <div className='w-screen h-screen overflow-x-hidden custom-scrollbar bg-white'>
      <Navbar />
      <div className="h-auto mt-[8.375rem] max-w-980:mt-[90px] max-w-492:mt-[70px] overflow-scroll scrollbar-hide md:px-8 px-2 pb-6">
        <div className="w-full h-[4rem] flex justify-center items-center mb-6"> {/* Added mb-6 for margin-bottom */}
          <div className="w-full md:h-[5rem] h-[4.5rem] flex justify-between items-center md:px-6 px-2 bg-white rounded-lg shadow-lg text-white">
            <h1 className="text-2xl font-semibold md:block hidden text-[#19194D]">
              News by Alumni Cell, IIIT Kota
            </h1>
            <div className="md:w-1/2 w-full flex items-center">
              <TextField
                variant="outlined"
                placeholder="Search News..."
                fullWidth
                value={searchInput}
                onChange={handleSearchInputChange}
                onKeyPress={handleSearchKeyPress}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon style={{ color: "#4A5568" }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSearch}>
                        <ArrowForwardIcon style={{ color: "#4A5568" }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    backgroundColor: "white",
                    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "gray",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#CBD5E0",
                    },
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "10px 14px",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#CBD5E0",
                  },
                }}
              />
              <Button
                onClick={clearSearch}
                variant="contained"
                color="primary"
                sx={{ ml: 2, backgroundColor: searchInput || filteredNews.length !== newsData.length ? "#38B2AC" : "#CBD5E0" }}
                disabled={filteredNews.length === newsData.length}
              >
                Clear
              </Button>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center gap-6 px-4 pb-6'>
          {filteredNews.map((news) => (
            <NewsCard
              key={news.id}
              id={news.id}
              title={news.title}
              content={news.content}
              referenceLink={news.referenceLink}
              postedOn={news.postedOn}
              sx={{ mb: 4 }}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;
