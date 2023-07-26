// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract contractApi {
    struct MarketQuestion {
        uint256 id;
        string question;
        string description;
        string source;
        string category;
        string subCategory;
    }
    address owner;
    MarketQuestion public removeMe;
    mapping(uint256 => MarketQuestion) public questions;
    MarketQuestion[] public marketQuestionArray;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function.");
        _;
    }

    function setMarketQuestion(
        uint256 _id,
        string memory _question,
        string memory _description,
        string memory _source,
        string memory _category,
        string memory _subCategory
    ) public onlyOwner {
        MarketQuestion memory question = MarketQuestion(
            _id,
            _question,
            _description,
            _source,
            _category,
            _subCategory
        );
        questions[_id] = question;
        marketQuestionArray.push(
            MarketQuestion(
                _id,
                _question,
                _description,
                _source,
                _category,
                _subCategory
            )
        );
    }

    function getMarketQuestions(
        uint256 _id
    )
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        require(questions[_id].id != 0, "Question is not available");
        MarketQuestion memory question = questions[_id];
        return (
            question.question,
            question.description,
            question.source,
            question.category,
            question.subCategory
        );
    }

    function getAllMarketQuestions()
        public
        view
        returns (MarketQuestion[] memory)
    {
        return marketQuestionArray;
    }

    function deleteMarketQuestion(uint256 _id) public onlyOwner {
        require(questions[_id].id != 0, "Question is not available");
        delete questions[_id];
        for (uint256 i = 0; i < marketQuestionArray.length; i++) {
            if (marketQuestionArray[i].id == _id) {
                removeMe = marketQuestionArray[i];
                marketQuestionArray[i] = marketQuestionArray[
                    marketQuestionArray.length - 1
                ];
                marketQuestionArray[marketQuestionArray.length - 1] = removeMe;
            }
        }
        marketQuestionArray.pop();
    }

    function updateMarketQuestion(
        uint256 _id,
        string memory _question,
        string memory _description,
        string memory _source,
        string memory _category,
        string memory _subCategory
    ) public onlyOwner {
        require(questions[_id].id != 0, "Questions are not available");
        deleteMarketQuestion(_id);
        questions[_id] = MarketQuestion(
            _id,
            _question,
            _description,
            _source,
            _category,
            _subCategory
        );
        marketQuestionArray.push(
            MarketQuestion(
                _id,
                _question,
                _description,
                _source,
                _category,
                _subCategory
            )
        );
    }
}
