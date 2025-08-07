import React, { Fragment } from 'react';

const Section = (props: { title: string; desc: string }) => {
  return (
    <section>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </section>
  );
};

export const SectionList = () => {
  return (
    <div className="wrap">
      <Section
        title={'Progressive'}
        desc={'以 Web 标准为起点，结合 “端能力” 渐进式地提升 Web 应用的性能。'}
      />
      <Section
        title={'Performant'}
        desc={'跳出 Webview 来优化 Web 性能，如 Prefetch、PreRender、NSR 等。'}
      />
      <Section
        title={'Business-friendly'}
        desc={'直面各类场景中业务关注的性能和用户体验问题，各类能力开箱即用。'}
      />
    </div>
  );
};
