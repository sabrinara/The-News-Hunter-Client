import { useEffect, useState } from "react";
import HelmetKiller from "../../Shared/HelmetKiller/HelmetKIller";
import AritcleCard from "../AritcleCard";
import { FaArrowDown } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
const tags = [
    'Sports',
    'Business',
    'Technology',
    'Entertainment',
    'Health',
    'Science',
    'General',
    'Fashion',
    'Travel',
    'Food',
    'Music',
    'Automobile',
    'Education',
    'Gaming',
    'Movie',
    'Religion',
    'Animal',
    'War',
    'Politic',
    'Crime',
    'Environment',
    'AI',
    'Space',
    'Nature',
    'Ethics',
    'Philosophy',
    'History',
    'Collaboration',
    'Covid-19',
    'Guidelines',
    'Innovation',
    'Bitcoin',
    'Cryptocurrency',
    'Blockchain',
    'NFT',
    'Artificial Intelligence',
    'Machine Learning',
    'Quantum Computing',
    'Computer Science',
];


const AllArticles = () => {
    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isSubscribed, setIsSubscribed] = useState(true);
    const [showTagsDropdown, setShowTagsDropdown] = useState(false);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(`https://the-news-hunter-server-lac.vercel.app/news?page=${page}&search=${searchTerm}`);
                const data = await response.json();

                if (data.length === 0) {
                    setHasMore(false);
                    return;
                }

                setArticles(prevArticles => [...prevArticles, ...data]);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();

    }, [page, searchTerm]);

    window.onscroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight &&
            hasMore
        ) {
            setPage(prevPage => prevPage + 1);
        }
    };

    const handleTagSelection = (tag) => {
        if (!selectedTags.includes(tag)) {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const removeSelectedTag = (tag) => {
        setSelectedTags(selectedTags.filter(selectedTag => selectedTag !== tag));
    };

    const toggleTagsDropdown = () => {
        setShowTagsDropdown(!showTagsDropdown);
    };

    const filteredArticles = articles.filter(article =>
        article.title && article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredBySelectedTags = selectedTags.length > 0 ? filteredArticles.filter(article =>
        article.tags.some(tag => selectedTags.includes(tag))
    ) : filteredArticles;

    const filteredPremiumApprovedArticles = filteredBySelectedTags.filter(article =>
        article.status === "approved" || article.status === "premium"
    );

    return (
        <div>
            <HelmetKiller pagename="All Articles" />
            <div>
                <h1 className="text-5xl text-sky-600 font-bold text-center my-16">All Articles</h1>
                <div className="flex justify-between mx-20 my-10 items-center  text-2xl">
                    <input
                        type="text"
                        placeholder="Search by Article Name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded text-sm"
                    />
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search by Tag"
                            value={selectedTags.join(" , ")}
                            readOnly
                            onClick={toggleTagsDropdown}
                            className="px-4 py-2 border border-gray-300 rounded cursor-pointer text-sm"
                        />
                        <div className="absolute right-0 top-0 bottom-0 flex items-center mr-2 cursor-pointer" onClick={toggleTagsDropdown}>
                            <FaArrowDown className="text-sm text-sky-700" />
                        </div>
                        {showTagsDropdown && (
                            <ul className="absolute top-full left-0 bg-white border border-gray-300 w-full mt-1 py-1 rounded-md shadow-lg text-xs">
                                {tags.map((tag, index) => (
                                    <li key={index} className="cursor-pointer hover:bg-gray-100 px-2 py-1" onClick={() => handleTagSelection(tag)}>
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>




                </div>
                <div className="flex justify-center items-center m-4 text-sm">
                    {selectedTags.map((tag, index) => (
                        <div key={index} className="flex items-center bg-sky-600 text-white rounded-md m-1 px-2 py-1">
                            <span className="mr-1">{tag}</span>
                            <button className="text-white" onClick={() => removeSelectedTag(tag)}>
                                <RxCrossCircled className="font-bold" />
                            </button>
                        </div>
                    ))}
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 px-20 gap-4">
                    {filteredPremiumApprovedArticles.map((article, index) => (
                        <div key={index}>
                            <AritcleCard article={article} premium={article.isPremium} isSubscribed={isSubscribed} />
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default AllArticles;
