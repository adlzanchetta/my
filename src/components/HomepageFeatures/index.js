import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Frontend',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        ReactJS, CSS frameworks, responsive design, optimized web maps...
      </>
    ),
  },
  {
    title: 'Backend',
    Svg: require('@site/static/img/undraw_docusaurus_tree_my.svg').default,
    description: (
      <>
        Python APIs, NodeJS and TypeScript APIs, SQL databases, C and C++ programming...
      </>
    ),
  },
  {
    title: 'Altogether',
    Svg: require('@site/static/img/altogether_tower.svg').default,
    description: (
      <>
        Docker, software design and engineering...
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
