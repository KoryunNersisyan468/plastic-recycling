interface ICharts {
  title: string;
  data: {
    name?: string;
    value?: number;
  }[];
  type: string;
}

export const charts: ICharts[] = [
  {
    title: "Գիտե՞ք պլաստիկի նշանների նշանակությունը (PETE, PS, PVC...)",
    data: [
      { name: "Այո", value: 27.3 },
      { name: "Ոչ", value: 72.7 },
    ],
    type: "pie",
  },
  {
    title: "Ինչքա՞ն հաճախ եք օգտագործում պլաստիկը տանը",
    data: [
      { name: "Հաճախ", value: 66 },
      { name: "Հազվադեպ", value: 14 },
      { name: "Գնում եմ ապրանքներ ապայե և թղթե փաթեթավորման մեջ ", value: 20 },
    ],
    type: "pie",
  },
  {
    title: "Կարծում եք՝բոլոր տեսակի պլաստիկը կարելի՞ է վերամշակել։",
    data: [
      { name: "Այո", value: 18 },
      { name: "Ոչ", value: 82 },
    ],
    type: "pie",
  },
  {
    title: "Ձեր բակում աղբի տեսակավորման աղբամաններ կա՞ն։",
    data: [
      { name: "Այո", value: 60 },
      { name: "Ոչ", value: 40 },
    ],
    type: "pie",
  },
  {
    title: "Կցանկանայի՞ք ձեր բակում աղբի տեսակավորման աղբամաններ ունենալ։\nԿարծում եք՝ աղբի տեսակավորումը կարևո՞ր է։",
    data: [
      { name: "Այո", value: 100 },
      { name: "Ոչ", value: 0 },
    ],
    type: "pie",
  },
];
