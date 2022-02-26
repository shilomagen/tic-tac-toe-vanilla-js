document.addEventListener('DOMContentLoaded', function () {
  onLoad();
});

function onLoad() {
  const model = new window.Model();
  const controller = new window.Controller(model);
  const view = new window.View(controller);
  model.subscribeToChanges(newState => view.render(newState));
  view.render(model.state);
}
