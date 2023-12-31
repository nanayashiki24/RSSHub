import MDXComponents from '@theme-original/MDXComponents';
import Badge from '@site/src/components/Badge';
import Route from '@site/src/components/Route';
import InstanceList from '@site/src/components/InstanceList';
import Link from '@docusaurus/Link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

// https://docusaurus.io/docs/markdown-features/react#mdx-component-scope
export default {
    ...MDXComponents,
    Badge,
    Route,
    InstanceList,
    Link,
    Tabs,
    TabItem,
};
