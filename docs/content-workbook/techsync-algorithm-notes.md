# TechSync Ops Algorithm Notes

These notes support the Lab page's TechSync Ops section.

The goal is to explain the product thinking behind the tool: role logic, queue behavior, completion gates, pseudocode, screenshots, and the next build direction.

## Role-Aware Workspace

**Problem**

Six roles need different capabilities without learning six unrelated products. The UI should feel consistent while narrowing each lane to the user's work, visibility, language, controls, and next action.

**Algorithm**

1. Load the current user session.
2. Identify the active role.
3. Choose the correct role-specific work-order endpoint.
4. Build the work views for that role.
5. Apply search and sort inside the visible queue only.
6. Build the right-rail next action for the active role.
7. Render only the controls that role can use.

**Pseudocode**

```text
function render_role_workspace(user):
  endpoint = choose_endpoint_for_role(user.role)
  work_orders = load_visible_work(endpoint)
  views = build_work_views(user.role, work_orders)
  visible = apply_view_search_sort(views, search, sort)
  next_action = choose_next_action(user.role, visible)
  render_workspace(views, visible, next_action, allowed_controls(user.role))
```

**Screen behavior**

- Viewer mode shows read-only portfolio visibility, risk counters, completion evidence counts, and no edit lane.
- Vendor mode shows assigned jobs, blockers, evidence due, and vendor-scoped next actions.

## Work Order Lifecycle And Completion Gate

**Problem**

Maintenance status changes need structure. Completion should not become a loose checkbox; the system should ask for completion evidence or a manager override reason.

**Algorithm**

1. Load the work order through the access boundary.
2. Check whether the requested status transition is allowed.
3. If target status is completed, require completion evidence or a manager override reason.
4. Reject role paths that cannot perform the requested action.
5. Patch the work order status and evidence fields.
6. Write a lifecycle event.

**Pseudocode**

```text
function update_status(work_order, target_status, caller):
  require allowed_transition(work_order.status, target_status)

  if target_status == "completed":
    require evidence_exists(work_order) or manager_override(caller)

  require caller_can_apply_status(caller.role, target_status)
  updated = save_status_change(work_order, target_status)
  write_lifecycle_event(updated, caller)
  return updated
```

**Screen behavior**

- Vendor mode surfaces evidence due as an action state.
- Viewer mode exposes completion counters without granting dispatch or edit controls.

## Queue Filters, Search, Sort, And Next Actions

**Problem**

Users should not hunt through every request. Each role needs a filtered queue, a search tool that respects the lane, deterministic sorting, and a clear next action when the queue gets busy.

**Algorithm**

1. Build queue summary from visible work orders.
2. Build role-specific work views.
3. Apply selected view first.
4. Search only against the filtered visible queue.
5. Sort by role-safe signals.
6. Score the next-best action based on role, state, priority, blockers, stale risk, assignment, and completion evidence.

**Pseudocode**

```text
function visible_queue(work_orders, role, view, query, sort):
  summary = summarize_visible_work(work_orders)
  filtered = apply_role_view(role, work_orders, view)
  searched = search_visible_work(role, filtered, query)
  ordered = sort_for_role(role, searched, sort)
  next_action = score_next_action(role, ordered)
  return { summary, ordered, next_action }
```

**Screen behavior**

- Both screenshots show role-specific views, role-aware search copy, counters, and right-rail next actions.
