// ============================================================
// にゅうた動物病院 ポータル - ツール設定
// ここにツールを追加・編集するだけで、ポータルのカードが増減します
// url は実際のGitHub Pagesのリンクに書き換えてください
// ============================================================

const TOOLS = [
  {
    id: "anesthesia",
    name: "麻酔量計算",
    description: "体重・処置から投与量を自動計算",
    url: "https://silmotoki-tech.github.io/-Anesthesia-Dose-Calculator/",
    icon: "syringe", // syringe / yen / paw
    color: "#5B7FBF"
  },
  {
    id: "surgery-cost",
    name: "手術費用見積もり",
    description: "手術内容から費用を見積もり",
    url: "https://silmotoki-tech.github.io/operation_price/",
    icon: "yen",
    color: "#C9A046"
  }
  // 新しいツールはここに追加してください。例：
  // {
  //   id: "new-tool",
  //   name: "ツール名",
  //   description: "簡単な説明",
  //   url: "https://example.github.io/new-tool/",
  //   icon: "paw",
  //   color: "#6fb82b"
  // }
];
