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
  },
  // 新しいツールはここに追加してください。例：
  // {
  //   id: "new-tool",
  //   name: "ツール名",
  //   description: "簡単な説明",
  //   url: "https://example.github.io/new-tool/",
  //   icon: "paw",
  //   color: "#6fb82b"
  // },
  {
    id: "schedule",
    name: "スケジュール",
    description: "オペ・検査・休みの予定を管理",
    url: "https://claude.ai/public/artifacts/1b6a20df-7e7e-4935-bca2-69ff119af6d1",
    icon: "calendar",
    color: "#6fb82b"
  }
];
