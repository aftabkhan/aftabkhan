# LedgerAI release checklist

## Automated

- [x] Standalone HTML has no external runtime dependencies.
- [x] Inline JavaScript parses successfully.
- [x] Required accessibility and responsive hooks are present.
- [x] Documented breakpoints match the implemented CSS.
- [x] GitHub Actions validation is configured for the demo branch and pull requests.

## Manual browser verification

- [ ] Overview, Transactions, AI Review and Build views switch correctly.
- [ ] Search and status filters work independently and together.
- [ ] Empty transaction results are announced and understandable.
- [ ] Category changes update the transaction and review views.
- [ ] Approval updates queue counts, activity and status.
- [ ] Dialog opens with focus inside, traps Tab/Shift+Tab, closes with Escape and restores focus.
- [ ] Keyboard-only navigation reaches every control.
- [ ] Reduced-motion mode removes non-essential animation.
- [ ] Layout is checked above 1100px, at 900px, at 760px and at 430px.
- [ ] Browser smoke test passes in current Chrome, Edge and Firefox.

The automated gate protects source integrity. The unchecked items require a rendered browser and must be completed before merging the demo branch.
