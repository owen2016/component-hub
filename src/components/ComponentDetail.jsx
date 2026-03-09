import React from 'react';
import Breadcrumb from './Breadcrumb';

const ComponentDetail = () => {
  const breadcrumbItems = [
    { label: '首页', path: '/' },
    { label: 'Maven', path: '/maven' },
    { label: 'Spring Boot Starter', path: '/maven/spring-boot-starter' }
  ];

  return (
    <div className="component-detail">
      <Breadcrumb items={breadcrumbItems} />
      <div className="main-content">
        <div className="content-container">
          <div className="left-content">
            {/* 组件头部 */}
            <div className="component-header">
              <div className="title-area">
                <div className="title-info">
                  <div className="title-version">
                    <h1>Spring Boot Starter</h1>
                    <span className="version-tag">v2.7.5</span>
                  </div>
                  <p className="component-description">
                    Spring Boot自动配置启动器，简化应用开发配置
                  </p>
                </div>
                <div className="action-buttons">
                  <button className="action-button">
                    <span className="button-icon"></span>
                    <span>收藏</span>
                  </button>
                  <button className="action-button">
                    <span className="button-icon"></span>
                    <span>分享</span>
                  </button>
                </div>
              </div>
              
              {/* 统计信息 */}
              <div className="stats-info">
                <div className="stat-item">
                  <div className="stat-icon">
                    <span></span>
                  </div>
                  <div className="stat-data">
                    <span className="stat-label">周下载量</span>
                    <span className="stat-value">10.5k</span>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <span></span>
                  </div>
                  <div className="stat-data">
                    <span className="stat-label">最新版本</span>
                    <span className="stat-value">v2.7.5</span>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <span>★</span>
                  </div>
                  <div className="stat-data">
                    <span className="stat-label">Stars</span>
                    <span className="stat-value">50.2k</span>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <span></span>
                  </div>
                  <div className="stat-data">
                    <span className="stat-label">Forks</span>
                    <span className="stat-value">13.8k</span>
                  </div>
                </div>
              </div>
              
              {/* 组件信息标签 */}
              <div className="info-tags">
                <div className="tag-item">
                  <span className="tag-label">作者:</span>
                  <span className="tag-value">Spring Team</span>
                </div>
                <div className="tag-item">
                  <span className="tag-label">发布时间:</span>
                  <span className="tag-value">2023-05-24</span>
                </div>
                <div className="tag-item">
                  <span className="tag-label">许可证:</span>
                  <span className="tag-value">Apache 2.0</span>
                </div>
                <div className="tag-item">
                  <span className="tag-label">语言:</span>
                  <span className="tag-value">Java</span>
                </div>
              </div>
            </div>
            
            {/* 代码仓库信息 */}
            <div className="repo-info">
              <h2>代码仓库</h2>
              <div className="repo-url">
                <span className="url-label">GitHub:</span>
                <a href="https://github.com/spring-projects/spring-boot" target="_blank" rel="noopener noreferrer">
                  github.com/spring-projects/spring-boot
                </a>
              </div>
            </div>
            
            {/* 安装指南 */}
            <div className="installation-guide">
              <h2>安装指南</h2>
              <div className="code-block">
                <pre>
                  <code>{`<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter</artifactId>
  <version>2.7.5</version>
</dependency>`}</code>
                </pre>
              </div>
            </div>
            
            {/* 组件介绍 */}
            <div className="component-intro">
              <h2>组件介绍</h2>
              <p>
                Spring Boot Starter是Spring Boot的核心组件，提供了自动配置、依赖管理和运行时环境等功能，
                极大地简化了Spring应用的开发和部署。通过引入相应的starter依赖，开发者可以快速搭建起完整的应用框架，
                无需手动配置大量的XML文件和依赖项。
              </p>
              <p>
                Spring Boot Starter包含了以下核心功能：
              </p>
              <ul>
                <li>自动配置：根据类路径中的依赖自动配置应用</li>
                <li>嵌入式服务器：内置Tomcat、Jetty等服务器</li>
                <li>健康检查：提供应用健康状态监控</li>
                <li>外部配置：支持多种配置方式</li>
                <li>生产就绪：提供指标、审计等生产环境功能</li>
              </ul>
            </div>
          </div>
          
          {/* 右侧边栏 */}
          <div className="right-sidebar">
            {/* 快速操作 */}
            <div className="quick-actions">
              <h3>快速操作</h3>
              <button className="quick-action-button">
                <span className="button-icon"></span>
                <span>查看文档</span>
              </button>
              <button className="quick-action-button">
                <span className="button-icon"></span>
                <span>版本历史</span>
              </button>
              <button className="quick-action-button">
                <span className="button-icon"></span>
                <span>提交 issue</span>
              </button>
            </div>
            
            {/* 相关组件 */}
            <div className="related-components">
              <h3>相关组件</h3>
              <div className="related-item">
                <span className="related-name">Spring Boot Starter Web</span>
                <span className="related-downloads">15.2k/周</span>
              </div>
              <div className="related-item">
                <span className="related-name">Spring Boot Starter Data JPA</span>
                <span className="related-downloads">12.8k/周</span>
              </div>
              <div className="related-item">
                <span className="related-name">Spring Boot Starter Security</span>
                <span className="related-downloads">9.5k/周</span>
              </div>
              <div className="related-item">
                <span className="related-name">Spring Boot Starter Test</span>
                <span className="related-downloads">8.7k/周</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentDetail;