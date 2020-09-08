<template>
  <div>
    <div class="s12">
      <div class="card">
        <div class="card-header">
          <h5>Text Inputs</h5>
        </div>
        <p>Text fields allow user input. The border should light up simply and clearly indicating which field the user is currently editing. You must have a .input-field div wrapping your input and label. This is only used in our Input and Textarea form elements.</p>
        <form class="s12">
          <div class="input-field s6">
            <input placeholder="Placeholder" id="first_name" type="text" class="validate" />
            <label for="first_name">First Name</label>
            <div class="input-field s6">
              <input id="last_name" type="text" class="validate" />
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div class="input-field s12">
            <input disabled value="I am not editable" id="disabled" type="text" class="validate" />
            <label for="disabled">Disabled</label>
          </div>
          <div class="input-field s12">
            <input id="password" type="password" class="validate" />
            <label for="password">Password</label>
          </div>
          <div class="input-field s12">
            <input id="email" type="email" class="validate" />
            <label for="email">Email</label>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>