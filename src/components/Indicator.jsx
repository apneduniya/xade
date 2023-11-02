import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactSpeedometer from "react-d3-speedometer";


const IndicatorTabs = ({ title, value, description }) => {
    const [valueIndicator, setValueIndicator] = useState("");
    const [fontColor, setFontColor] = useState("");
    const [tagBackgroundColor, setTagBackgroundColor] = useState("");
    // write if else setting valueIndicator to a certain value like this:
    // 0 - 24: VERY NEGATIVE
    // 25 - 39: NEGATIVE
    // 40 - 59: NEUTRAL
    // 60 - 74: POSITIVE
    // 75 - 100: VERY POSITIVE
    useEffect(() => {
        if (value < 25) {
            setValueIndicator("VERY NEGATIVE");
            setFontColor("#ff4e4f");
            setTagBackgroundColor("rgba(234,84,85,.12)");
        }
        else if (value < 40) {
            setValueIndicator("NEGATIVE");
            setFontColor("#ff6b4d");
            setTagBackgroundColor("rgba(216,96,80,.12)");
        }
        else if (value < 60) {
            setValueIndicator("NEUTRAL");
            setFontColor("#ff9f43");
            setTagBackgroundColor("rgba(255,159,67,.12)");
        }
        else if (value < 75) {
            setValueIndicator("POSITIVE");
            setFontColor("#8bc75e");
            setTagBackgroundColor("rgba(86,171,86,.12)");
        }
        else {
            setValueIndicator("VERY POSITIVE");
            setFontColor("#28ba6c");
            setTagBackgroundColor("rgba(40,186,108,.12)");
        }
    }, [value])

    return (
        <>
            <AccordionItem border="1px solid #292929" marginBottom="5%">
                <AccordionButton backgroundColor="transparent" border="0" padding="14px 24px" gap="8px" minWidth="300px" cursor="pointer">
                    <Box as="span" flex='1' textAlign='left' fontSize="14px" display="flex" justifyContent="space-between" alignItems="center" color="white" width="100%">
                        {title}
                        <div className='indicatorTags' style={{ backgroundColor: tagBackgroundColor, color: fontColor }}>
                            {value}% {valueIndicator}
                        </div>
                    </Box>
                    <AccordionIcon color="white" boxSize="16px" />
                </AccordionButton>
                <AccordionPanel padding="14px 24px" minWidth="300px" fontSize="14px">
                    {description}
                </AccordionPanel>
            </AccordionItem>
        </>
    )
}

const DropDown = ({ title, values, selectedValue, setSelectedValue }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(selectedValue);

    useEffect(() => {
        setSelectedValue(value);
    }, [value, setSelectedValue]);

    return (
        <>
            <div className="dropDownContainer">
                <div className="dropDownTitleContainer" onClick={() => setOpen(!open)}>
                    <h2 className="dropDownTitle">{title} - {value}</h2>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#ffffff"></path> </g></svg>
                </div>
                {open && (
                    <div className="dropDownOptionsContainer">
                        {values.map((value, index) => (
                            <div key={index} className="dropDownOption" onClick={() => {
                                setValue(value);
                                setOpen(false);
                            }}>
                                {value}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

const Indicator = () => {
    // dropdown values
    const [selectedValue, setSelectedValue] = useState("15 minutes");
    const [values, setValues] = useState(["15 minutes", "1 hour", "4 hours", "1 day"]);
    const [CFGIResponse, setCFGIResponse] = useState({});
    const [indicatorColor, setIndicatorColor] = useState("");
    const [indicatorTitle, setIndicatorTitle] = useState("");

    const requestCFGIData = async (period) => {
        const config = {
            headers: {
                'Accept': 'application/json', // Request JSON response
            }
        };

        await axios.get(`http://localhost:8000/api?period=${period}&token=BTC&values=1`)
            .then(async (response) => {
                console.log(response);
                if (response.status === 200) {
                    setCFGIResponse(response.data[0]);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        // Write if else by taking selected value comparing and sending 1 or 2 or 3 or 4 to the requestCFGIData function
        // 1: 15 minutes temporality
        // 2: 1 hour temporality
        // 3: 4 hours temporality
        // 4: 1 day temporality
        if (selectedValue === "15 minutes") {
            requestCFGIData(1);
        }
        else if (selectedValue === "1 hour") {
            requestCFGIData(2);
        }
        else if (selectedValue === "4 hours") {
            requestCFGIData(3);
        }
        else {
            requestCFGIData(4);
        }
        requestCFGIData(selectedValue);
    }, [selectedValue])

    // 0 - 24: VERY NEGATIVE
    // 25 - 39: NEGATIVE
    // 40 - 59: NEUTRAL
    // 60 - 74: POSITIVE
    // 75 - 100: VERY POSITIVE
    useEffect(() => {
        if (CFGIResponse.cfgi < 25) {
            setIndicatorTitle("EXTREMELY FEAR");
            setIndicatorColor("#ff4e4f");
        }
        else if (CFGIResponse.cfgi < 40) {
            setIndicatorTitle("FEAR");
            setIndicatorColor("#ff6b4d");
        }
        else if (CFGIResponse.cfgi < 60) {
            setIndicatorTitle("NEUTRAL");
            setIndicatorColor("#ff9f43");
        }
        else if (CFGIResponse.cfgi < 75) {
            setIndicatorTitle("GREED");
            setIndicatorColor("#8bc75e");
        }
        else {
            setIndicatorTitle("EXTREMELY GREED");
            setIndicatorColor("#28ba6c");
        }
    }, [CFGIResponse])

    return (
        <>
            <div className="indicatorContainer">
                <div className="indicatorFirstColumnContainer">
                    <Accordion allowToggle>
                        <IndicatorTabs title="Price Score" value={CFGIResponse.data_price} description="The Price Score indicator is a relevant indicator to analize and assign the Bitcoin price evolution a certain numerical value." />
                        <IndicatorTabs title="Volatility" value={CFGIResponse.data_volatility} description="Price Volatility is also another important indicator and the biggest trigger for market sentiment. To measure it, we use values ​​between 0 and 1 that determine the degree of current Bitcoin price fluctuation for the desired time frame." />
                        <IndicatorTabs title="Volume" value={CFGIResponse.data_volume} description="Like volatility, the Bitcoin Volume is a determining factor. An increase in the volume implies a greater negotiation in the market, which is caused by an increase in the movements caused by an interest, which is synonymous with great sentiment. A strong volume determines a strong level of greed in Bitcoin bull markets, but also a strong level of panic in bear markets." />
                        <IndicatorTabs title="Impulse" value={CFGIResponse.data_impulse} description="The Impulse indicator measures the current Bitcoin price strength compared to previous values ​​to determine in a range from -1 to 1 how it is affecting the Bitcoin market sentiment." />
                        <IndicatorTabs title="Technical" value={CFGIResponse.data_technical} description="It is proven that technical analyzes themselves influence market sentiment, especially those that are more popular." />
                    </Accordion>
                </div>
                <div className="indicatorSecondColumnContainer">
                    {
                        CFGIResponse.cfgi ?
                            <ReactSpeedometer value={CFGIResponse.cfgi} maxValue={100} needleColor="transparent" labelFontSize={0} ringWidth={40} customSegmentStops={[0, CFGIResponse.cfgi, 100]} segmentColors={[indicatorColor, '#111111']} currentValueText={''} textColor='#7A7B7C' valueTextFontWeight='normal' height="200px" forceRender />
                            :
                            null
                    }
                    <div className='indicatorChartDetailsContainer'>
                        <span className='indicatorChartPercentage'>{CFGIResponse.cfgi}%</span>
                        <h2 className='indicatorChartTitle' style={{ color: indicatorColor }}>{indicatorTitle}</h2>
                    </div>
                    <div>
                        <DropDown title="Temporality" values={values} selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
                    </div>
                </div>
                <div className="indicatorThirdColumnContainer">
                    <Accordion allowToggle>
                        <IndicatorTabs title="Social" value={CFGIResponse.data_social} description="The algorithm also interprets differently all those publications with an advertising nature and treats them differently." />
                        <IndicatorTabs title="Dominance" value={CFGIResponse.data_dominance} description="This other indicator takes into account the dominance of Bitcoin with respect to the general market. When it gets greedy, altcoin investments greatly increase and the total market capitalization increases, which also decreases Bitcoin's dominance. The same thing happens when the market panics but in reverse. For this reason, both the token capitalization and the total market capitalization are calculated." />
                        <IndicatorTabs title="Search" value={CFGIResponse.data_trends} description="Trends is another factor that determines the sentiment of a particular market. We analize the search volume on Bitcoin has on major search engines like Google, Bing, Yandex, and Baidu." />
                        <IndicatorTabs title="Whales" value={CFGIResponse.datas_whales} description="A high ratio of Bitcoin moves to stablecoins indicates strong selling intent which means greed market , while a higher ratio of stablecoins moves indicates stronger buying intent and fear market." />
                        <IndicatorTabs title="Order Book" value={CFGIResponse.data_orders} description="Another great predictor of sentiment through a quantitative source are the order books. Crypto Fear and Greed Index analyzes the order book for Bitcoin on different exchanges to determine the buying and selling pressure that contiguous orders exert on the price. In such a way that you can know the buying and selling pressure that the orders which are going to be executed will exert." />
                    </Accordion>
                </div>
            </div>
        </>
    )
}


export default Indicator;

