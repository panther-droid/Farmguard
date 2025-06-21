export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    chat: IDL.Func([IDL.Vec(IDL.Record({
      role: IDL.Variant({
        system_: IDL.Null,
        user: IDL.Null,
      }),
      content: IDL.Text
    }))], [IDL.Text], ['query']),
  });
};
