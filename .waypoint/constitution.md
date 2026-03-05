# Project Constitution

> This document defines the non-negotiable principles and governance rules for **vahin-printerss**.
> All agents and workflows must respect these principles.

## Project Overview

- **Name**: vahin-printerss
- **Type**: greenfield
- **Track**: team

## Architecture: Domain-Driven Design

### Core Principles

- Domain logic is the heart of the application
- Entities have identity and lifecycle
- Value objects are immutable and compared by value
- Aggregates enforce consistency boundaries
- Repositories abstract persistence
- Domain events capture things that happened
- Ubiquitous language shared between code and stakeholders

### Layer Responsibilities

**Domain**: Core business logic
- Contains: entities, value-objects, domain-services, domain-events
- No dependencies on other layers
- Pure business logic
- Entities encapsulate rules
- Value objects immutable

**Application**: Use cases and orchestration
- Contains: use-cases, ports, dtos, application-services
- Only depends on Domain
- Use case implementations
- Port interfaces defined
- No direct infrastructure

**Infrastructure**: External concerns
- Contains: repositories, external-services, mappers, adapters
- Implements port interfaces
- Database repositories
- External API integrations
- Framework-specific code

**Presentation**: User interface
- Contains: controllers, views, presenters, api-routes
- Depends on Application layer
- HTTP request/response handling
- DTO/domain mapping
- External input validation

## Quality Standards

## Security Principles

1. **No secrets in code** - Use environment variables
2. **Validate all inputs** - At system boundaries
3. **Parameterized queries only** - Never concatenate SQL
4. **Principle of least privilege** - Minimal permissions

## Anti-Patterns to AVOID

- **Anemic Domain Model**: Entities with only getters/setters, no behavior
  - Fix: Add business logic methods to entities
- **Domain Layer Database Dependency**: Domain entities importing ORM decorators or database types
  - Fix: Keep domain entities pure, use mappers in infrastructure
- **Leaking Domain Logic**: Business rules implemented in controllers or services outside domain
  - Fix: Move business rules into domain entities or domain services

## Security Principles

### Security

- Never commit secrets, API keys, or credentials to source control
- Validate all inputs at system boundaries (user input, external APIs)
- Use parameterized queries to prevent SQL injection
- Apply principle of least privilege for all access controls
- Sanitize output to prevent XSS attacks

## Quality Principles

### Code Quality

- Write self-documenting code with clear naming
- Keep functions focused and small (single responsibility)
- Prefer composition over inheritance
- Avoid premature optimization
- Delete dead code rather than commenting it out

### Testing

- Write tests for all new functionality
- Test behavior, not implementation details
- Maintain meaningful test coverage
- Use descriptive test names that explain the expected behavior
- Keep tests independent and isolated

### Error Handling

- Handle errors at appropriate boundaries
- Provide meaningful error messages to users
- Log errors with sufficient context for debugging
- Use structured error types (not generic Error)
- Never swallow errors silently

## Governance Principles

### Governance

- All architecture decisions require team review
- Breaking changes require ADR documentation
- Security issues take priority over feature work
- Code review required before merging to main
- Document non-obvious design decisions

## Governance

- This constitution is **immutable** during the project lifecycle
- All architectural decisions must reference this document
- Exceptions require explicit documentation and approval
