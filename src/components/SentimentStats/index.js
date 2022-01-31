import React from "react";

const SentimentStats = ({ sentimentData }) => {
  const sentiments = [
    {
      language: "en",
      time: 2,
      length: 7,
      governor: 1,
      raw: "how can you not love Obama?",
      stats: {
        words: 6,
        confidence: 0.8571428571428571,
        p_foreign: 0,
        p_upper: 0,
        p_cap: 16.666666666666668,
        avg_length: 3.6666666666666665,
        breakpoints: 0,
      },
      profile: {
        label: "neutral",
        sentiment: -0.1285714285714286,
        emphasis: 1,
        amplitude: 0.21428571428571427,
        politeness: 0,
        dirtiness: 0,
        types: ["interrogative"],
        main_tense: "present",
        negated: true,
      },
      has_negation: false,
      entities: [
        {
          raw: "Obama",
          norm: "obama",
          fromIndex: 5,
          toIndex: 5,
          type: null,
          meta: {},
        },
      ],
      deps: {
        subjects: [],
        objects: [5],
      },
      root: {
        meta: {},
        left: [],
        right: [],
        tags: ["WRB"],
        from: 0,
        to: 0,
        raw: "how",
        norm: "how",
        type: "ADV",
        is: null,
        label: "ROOT",
      },
      tokens: [
        {
          raw: "how",
          norm: "how",
          stem: "how",
          pos: "WRB",
          profile: {
            sentiment: 0,
            emphasis: 1,
            negated: false,
            breakpoint: false,
          },
          attr: {
            value: null,
            acronym: false,
            abbr: false,
            is_verb: false,
            tense: "present",
            infinitive: null,
            is_noun: false,
            plural: null,
            singular: null,
            entity: -1,
            is_punc: false,
          },
          deps: {
            master: 1,
            governor: false,
            type: "unknown",
            dependencies: [],
          },
        },
        {
          raw: "can",
          norm: "can",
          stem: "can",
          pos: "MD",
          profile: {
            sentiment: -0.3,
            emphasis: 1,
            negated: false,
            breakpoint: false,
          },
          attr: {
            value: null,
            acronym: false,
            abbr: false,
            is_verb: false,
            tense: "present",
            infinitive: null,
            is_noun: false,
            plural: null,
            singular: null,
            entity: -1,
            is_punc: false,
          },
          deps: {
            master: null,
            governor: true,
            type: "unknown",
            dependencies: [0, 2, 3, 4, 6],
          },
        },
        {
          raw: "you",
          norm: "you",
          stem: "you",
          pos: "PRP",
          profile: {
            sentiment: 0,
            emphasis: 1,
            negated: false,
            breakpoint: false,
          },
          attr: {
            value: null,
            acronym: false,
            abbr: false,
            is_verb: false,
            tense: "present",
            infinitive: null,
            is_noun: false,
            plural: null,
            singular: null,
            entity: -1,
            is_punc: false,
          },
          deps: {
            master: 1,
            governor: false,
            type: "unknown",
            dependencies: [],
          },
        },
        {
          raw: "not",
          norm: "not",
          stem: "not",
          pos: "RB",
          profile: {
            sentiment: 0,
            emphasis: 1,
            negated: true,
            breakpoint: false,
          },
          attr: {
            value: null,
            acronym: false,
            abbr: false,
            is_verb: false,
            tense: "present",
            infinitive: null,
            is_noun: false,
            plural: null,
            singular: null,
            entity: -1,
            is_punc: false,
          },
          deps: {
            master: 1,
            governor: false,
            type: "unknown",
            dependencies: [],
          },
        },
        {
          raw: "love",
          norm: "love",
          stem: "love",
          pos: "VB",
          profile: {
            sentiment: -1.5,
            emphasis: 1,
            negated: true,
            breakpoint: false,
          },
          attr: {
            value: null,
            acronym: false,
            abbr: false,
            is_verb: true,
            tense: "present",
            infinitive: null,
            is_noun: false,
            plural: null,
            singular: null,
            entity: -1,
            is_punc: false,
          },
          deps: {
            master: 1,
            governor: false,
            type: "unknown",
            dependencies: [5],
          },
        },
        {
          raw: "Obama",
          norm: "obama",
          stem: "obama",
          pos: "NNP",
          profile: {
            sentiment: 0,
            emphasis: 1,
            negated: true,
            breakpoint: false,
          },
          attr: {
            value: null,
            acronym: false,
            abbr: false,
            is_verb: false,
            tense: "present",
            infinitive: null,
            is_noun: true,
            plural: null,
            singular: null,
            entity: 0,
            is_punc: false,
          },
          deps: {
            master: 4,
            governor: false,
            type: "obj",
            dependencies: [],
          },
        },
        {
          raw: "?",
          norm: "?",
          stem: "?",
          pos: ".",
          profile: {
            sentiment: 0,
            emphasis: 1,
            negated: false,
            breakpoint: false,
          },
          attr: {
            value: null,
            acronym: false,
            abbr: false,
            is_verb: false,
            tense: "present",
            infinitive: null,
            is_noun: false,
            plural: null,
            singular: null,
            entity: -1,
            is_punc: true,
          },
          deps: {
            master: 1,
            governor: false,
            type: "unknown",
            dependencies: [],
          },
        },
      ],
      tags: ["WRB", "MD", "PRP", "RB", "VB", "NNP", "."],
    },
    {
      language: "en",
      time: 0,
      length: 6,
      governor: 1,
      raw: "he makes jokes about himself.",
      stats: {
        words: 5,
        confidence: 1,
        p_foreign: 0,
        p_upper: 0,
        p_cap: 0,
        avg_length: 5,
        breakpoints: 0,
      },
      profile: {
        label: "positive",
        sentiment: 0.39999999999999997,
        emphasis: 1,
        amplitude: 0.3333333333333333,
        politeness: 0,
        dirtiness: 0,
        types: [],
        main_tense: "present",
        negated: false,
      },
      has_negation: false,
      entities: [],
      deps: {
        subjects: [0],
        objects: [],
      },
      root: {
        meta: {},
        left: [
          {
            meta: {},
            left: [],
            right: [],
            tags: ["PRP"],
            from: 0,
            to: 0,
            raw: "he",
            norm: "he",
            type: "NP",
            is: null,
            label: "NSUBJ",
          },
        ],
        right: [
          {
            meta: {},
            left: [],
            right: [
              {
                meta: {},
                left: [],
                right: [
                  {
                    meta: {},
                    left: [],
                    right: [],
                    tags: ["PRP"],
                    from: 4,
                    to: 4,
                    raw: "himself",
                    norm: "himself",
                    type: "NP",
                    is: null,
                    label: "POBJ",
                  },
                ],
                tags: ["IN"],
                from: 3,
                to: 3,
                raw: "about",
                norm: "about",
                type: "PP",
                is: null,
                label: "PREP",
              },
            ],
            tags: ["NNS"],
            from: 2,
            to: 2,
            raw: "jokes",
            norm: "jokes",
            type: "NP",
            is: null,
            label: "DOBJ",
          },
          {
            meta: {},
            left: [],
            right: [],
            tags: ["."],
            from: 5,
            to: 5,
            raw: ".",
            norm: ".",
            type: "PUNCT",
            is: null,
            label: "PUNCT",
          },
        ],
        tags: ["VBZ"],
        from: 1,
        to: 1,
        raw: "makes",
        norm: "makes",
        type: "VP",
        is: null,
        label: "ROOT",
      },
      tokens: [
        {
          raw: "he",
          norm: "he",
          stem: "he",
          pos: "PRP",
          profile: {
            sentiment: 0,
            emphasis: 1,
            negated: false,
            breakpoint: false,
          },
          attr: {
            value: null,
            acronym: false,
            abbr: false,
            is_verb: false,
            tense: "present",
            infinitive: null,
            is_noun: false,
            plural: null,
            singular: null,
            entity: -1,
            is_punc: false,
          },
          deps: {
            master: 1,
            governor: false,
            type: "subj",
            dependencies: [],
          },
        },
        {
          raw: "makes",
          norm: "makes",
          stem: "make",
          pos: "VBZ",
          profile: {
            sentiment: 0.4,
            emphasis: 1,
            negated: false,
            breakpoint: false,
          },
          attr: {
            value: null,
            acronym: false,
            abbr: false,
            is_verb: true,
            tense: "present",
            infinitive: "make",
            is_noun: false,
            plural: null,
            singular: null,
            entity: -1,
            is_punc: false,
          },
          deps: {
            master: null,
            governor: true,
            type: "unknown",
            dependencies: [0, 2, 3, 4, 5],
          },
        },
        {
          raw: "jokes",
          norm: "jokes",
          stem: "joke",
          pos: "NNS",
          profile: {
            sentiment: 2,
            emphasis: 1,
            negated: false,
            breakpoint: false,
          },
          attr: {
            value: null,
            acronym: false,
            abbr: false,
            is_verb: false,
            tense: "present",
            infinitive: null,
            is_noun: true,
            plural: null,
            singular: "joke",
            entity: -1,
            is_punc: false,
          },
          deps: {
            master: 1,
            governor: false,
            type: "unknown",
            dependencies: [],
          },
        },
        {
          raw: "about",
          norm: "about",
          stem: "about",
          pos: "IN",
          profile: {
            sentiment: 0,
            emphasis: 1,
            negated: false,
            breakpoint: false,
          },
          attr: {
            value: null,
            acronym: false,
            abbr: false,
            is_verb: false,
            tense: "present",
            infinitive: null,
            is_noun: false,
            plural: null,
            singular: null,
            entity: -1,
            is_punc: false,
          },
          deps: {
            master: 1,
            governor: false,
            type: "unknown",
            dependencies: [],
          },
        },
        {
          raw: "himself",
          norm: "himself",
          stem: "himself",
          pos: "PRP",
          profile: {
            sentiment: 0,
            emphasis: 1,
            negated: false,
            breakpoint: false,
          },
          attr: {
            value: null,
            acronym: false,
            abbr: false,
            is_verb: false,
            tense: "present",
            infinitive: null,
            is_noun: false,
            plural: null,
            singular: null,
            entity: -1,
            is_punc: false,
          },
          deps: {
            master: 1,
            governor: false,
            type: "unknown",
            dependencies: [],
          },
        },
        {
          raw: ".",
          norm: ".",
          stem: ".",
          pos: ".",
          profile: {
            sentiment: 0,
            emphasis: 1,
            negated: false,
            breakpoint: false,
          },
          attr: {
            value: null,
            acronym: false,
            abbr: false,
            is_verb: false,
            tense: "present",
            infinitive: null,
            is_noun: false,
            plural: null,
            singular: null,
            entity: -1,
            is_punc: true,
          },
          deps: {
            master: 1,
            governor: false,
            type: "unknown",
            dependencies: [],
          },
        },
      ],
      tags: ["PRP", "VBZ", "NNS", "IN", "PRP", "."],
    },
  ];
  //   const {
  //     time,
  //     stats: { confidence },
  //     profile: { label, sentiment },
  //     tokens,
  //   } = sentimentObject || {};

  //   const getDataRows = () => {
  //       return new Array(7).map(item => {
  //           <div className="sentiment-item">
  //               <span>Hey</span>
  //               <span>234.3</span>
  //         </div>
  //     });
  //   };

  return (
    <div className="sentiment-stats">
      {sentiments.map((sentimentObject) => (
        <div className="sentiment-sentence">
          <div className="sentiment-sentence__stats">
            <div className="sentiment-sentence__stats--meta">
              <span>
                Confidence: {sentimentObject.stats.confidence.toFixed(2)}
              </span>
              <span>
                Sentiment Score: {sentimentObject.profile.sentiment.toFixed(2)}
              </span>
              <span>
                Amplitude: {sentimentObject.profile.amplitude.toFixed(2)}
              </span>
              <span>
                emphasis: {sentimentObject.profile.emphasis.toFixed(2)}
              </span>
            </div>

            <div className="sentiment-sentence__stats--types">
              {sentimentObject.profile.types.map((type) => (
                <span key={type}>{type}</span>
              ))}
              <span className={sentimentObject.profile.label}>
                {sentimentObject.profile.label}
              </span>
            </div>
          </div>
          <div className="sentiment-sentence__token-data">
            {sentimentObject.tokens.map((token, tokenIndex) => {
              let entityIndex = -1;
              for (
                let index = 0;
                index < sentimentObject.entities.length;
                index++
              ) {
                let entity = sentimentObject.entities[index];
                if (
                  entity.raw === token.raw &&
                  entity.fromIndex === tokenIndex
                ) {
                  entityIndex = index;
                  break;
                }
              }

              return (
                <div
                  className={`token ${entityIndex !== -1 ? "entity-item" : ""}`}
                >
                  <span
                    id="raw"
                    className={`${
                      token.profile.emphasis > 1 ? "emphasis" : ""
                    } ${
                      token.profile.sentiment > 0
                        ? "positive"
                        : token.profile.sentiment < 0
                        ? "negative"
                        : ""
                    } `}
                  >
                    {token.raw}
                    {entityIndex !== -1 ? (
                      <span className="entity">
                        {sentimentObject.entities[entityIndex].type}
                      </span>
                    ) : (
                      ""
                    )}
                  </span>
                  <span id="pos">
                    {token.pos}{" "}
                    {token.profile.sentiment
                      ? `/ ${token.profile.sentiment.toFixed(2)}`
                      : ""}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="sentiment-sentence__time-taken">
            Total time: {sentimentObject.time} milliseconds
          </div>
        </div>
      ))}
    </div>
  );
};

export default SentimentStats;
