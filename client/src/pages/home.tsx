import { useQueryBeta } from "~/hooks/use-query-beta";

type HomePageContentProps = {
  userReq: string;
  itemNum?: number;
};

const HomePageContent: React.VFC<HomePageContentProps> = ({
  userReq,
  itemNum,
}) => {
  const { data, isValidating } = useQueryBeta(userReq, itemNum);

  if (data === undefined || isValidating) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <a href={data.base_url}>
        <div>
          <div>title</div>
          <div>{data?.title}</div>
        </div>
        <img src={data.image} alt="hoge" />
        <div>
          <div>foo</div>
          <div>{data.describe}</div>
        </div>
      </a>
    </div>
  );
};

export const Home: React.VFC = () => {
  return (
    <div>
      {/* とりあえず検索なしで雑に表示するよ */}
      <HomePageContent userReq="はろー" itemNum={2} />
    </div>
  );
};
