
# PRD: Rubric Manager

Product Requirement Document for Rubric Manager

## 1. Overview

- A website that allows users to easily view + edit rubrics corresponding to each domain/subdomain/category
- Will likely be deployed as a standalone app for RDs and internal use

## 2. Objectives

- Create and edit rubrics
- Version control and audit trails
- LLM Evaluation integration
- Rubric templates and ai suggestions
- Collaboration and review
- Search and browse
- Export

## 3. User Stories

- As a RD/reviewer, I want to quickly browse available rubrics related to a domain, so I can apply the same standards across benchmark cases.

## 4. Functional Requirements

# Technical details (concerns)

- Should Next.js be used or can we get away with regular javascript (not even react)
- Handling authentication, oAuth or iHealth’s in-house authentication

# Dashboard Integration

```jsx
sidebar_navigation = {
    "🏠 Home": {
        "page": "home",
        "submenu": None
    },
    "📚 Rubrics": {
        "page": "rubrics",
        "submenu": [
            "Browse All",
            "My Rubrics",
            "Create New",
            "Archived"
        ]
    },
    "🧪 Test Cases": {
        "page": "test_cases",
        "submenu": [
            "Run LLM Evaluation",
            "Upload Case Data",
            "Manage Test Sets"
        ]
    },
    "🧠 Criteria & Logic": {
        "page": "criteria_logic",
        "submenu": [
            "Rule Builder",
            "LLM Suggestions",
            "Versioning & Audits"
        ]
    },
    "📈 Analytics": {
        "page": "analytics",
        "submenu": [
            "Performance Trends",
            "Agreement Metrics",
            "Reviewer Stats"
        ]
    },
    "⚙️ Settings": {
        "page": "settings",
        "submenu": [
            "User Preferences",
            "Export/Import",
            "System Logs"
        ]
    }
}

```

Git Repo https://github.com/ellaquan-ihealth/rubricmanager
