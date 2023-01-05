// Utilities
import { defineStore } from "pinia";
import { useFetch } from "@vueuse/core";
import { ref } from "vue";

interface IMeme {
  id: number;
  url: string;
  src: string;
  author: {
    id: number;
    name: string;
  };
  title: string;
  pageview: number;
  total_like_count: number;
  created_at: {
    timestamp: number;
    date_time_string: number;
  };
  hashtag: string;
  contest: IContest;
}

interface IContest {
  id: number;
  name: string;
}

export const useMemeStore = defineStore("meme", () => {
  const memes = ref<IMeme[]>();
  const memeClasses = ref<IContest[]>();

  async function getMemes() {
    const { isFetching, error, data } = await useFetch(
      "https://orange-resonance-6df7.jason60810.workers.dev/?https://memes.tw/wtf/api"
    )
      .get()
      .json();

    memes.value = data.value;
    memeClasses.value = getMemeClasses(memes.value);
  }

  async function getMemesByClassId(classId: number = 11) {
    const { isFetching, error, data } = await useFetch(
      `https://orange-resonance-6df7.jason60810.workers.dev/?https://memes.tw/wtf/api?contest=${classId}`
    )
      .get()
      .json();

    memes.value = data.value;
  }

  function getMemeClasses(memes: IMeme[] | undefined) {
    if (!memes) {
      return [{ name: "校園生活", id: 11 }];
    }

    const memeClassNames = [...new Set(memes.map((meme) => meme.contest.name))];

    const findClassNameId = (className: string) =>
      memes.find((meme) => meme.contest.name === className)?.contest.id;

    return [
      { id: 0, name: "熱門" },
      ...memeClassNames.map((memeClassName) => ({
        name: memeClassName,
        id: findClassNameId(memeClassName) ?? 11,
      })),
    ];
  }

  return { memes, getMemes, getMemesByClassId, memeClasses };
});
