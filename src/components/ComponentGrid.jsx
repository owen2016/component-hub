import React from 'react';
import ComponentCard from './ComponentCard';

const ComponentGrid = () => {
  const components = [
    {
      name: 'Spring Boot Starter',
      version: 'v2.7.5',
      description: 'Spring Boot自动配置启动器，简化应用开发配置',
      repo: 'github.com/spring-projects/spring-boot',
      downloads: '10M+',
      stars: '50K+',
      author: 'Spring Team'
    },
    {
      name: 'Hibernate Core',
      version: 'v6.1.0',
      description: 'Java持久化框架，提供对象关系映射功能',
      repo: 'github.com/hibernate/hibernate-orm',
      downloads: '8M+',
      stars: '15K+',
      author: 'Hibernate Team'
    },
    {
      name: 'Apache Commons Lang',
      version: 'v3.12.0',
      description: 'Apache Commons工具库，提供常用工具类',
      repo: 'github.com/apache/commons-lang',
      downloads: '15M+',
      stars: '5K+',
      author: 'Apache Foundation'
    }
  ];
  
  return (
    <div className="component-grid">
      <div className="grid-header">
        <div className="grid-title">热门 Maven 组件</div>
        <div className="view-all">
          <span>查看全部</span>
          <span className="arrow-icon"></span>
        </div>
      </div>
      <div className="card-container">
        {components.map((component, index) => (
          <ComponentCard key={index} component={component} />
        ))}
      </div>
    </div>
  );
};

export default ComponentGrid;