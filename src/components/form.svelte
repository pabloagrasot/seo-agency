<script>
// @ts-nocheck


    export let data;

    export let form;
     
</script>

<form method="POST">
<input class="input"
type="text"
name="nombre"
placeholder="Nombre y Apellidos"
value={form?.nombre ?? ''}

/>



<input class="input"
  type="email"
  name="email"
  placeholder="Email"
  value={form?.email ?? ''}
  />

  <input class="input"
  type="text"
  name="empresa"
  placeholder="Empresa"
  value={form?.empresa ?? ''}
  />

  <textarea name="duda" value={form?.duda ?? ''}></textarea>


  <button>Pregúntanos</button>


</form>