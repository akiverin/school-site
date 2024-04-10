export function replaceString(text) {
  let unionsAndPrepositions = [
    'так что',
    'дабы',
    'с тем чтобы',
    'несмотря на то',
    'хоть',
    'пускай',
    'хотя',
    'если',
    'если бы',
    'коли',
    'ежели',
    'так как',
    'потому что',
    'как будто',
    'словно',
    'точно',
    'как',
    'как бы',
    'до такой степени',
    'настолько',
    'до того',
    'такой',
    'где',
    'куда',
    'откуда',
    'когда',
    'что',
    'то есть',
    'а именно',
    'и',
    'да',
    'не только',
    'но и',
    'также',
    'тоже',
    'и',
    'ни',
    'как',
    'так',
    'сколько',
    'столько',
    'или',
    'либо',
    'то',
    'ли',
    'не',
    'то',
    'а',
    'зато',
    'однако',
    'же',
    'все же',
    'чтобы',
    'чтоб',
    'притом',
    'причём',
    'в',
    'без',
    'до',
    'из',
    'к',
    'на',
    'по',
    'о',
    'от',
    'перед',
    'при',
    'через',
    'с',
    'со',
    'у',
    'и',
    'нет',
    'за',
    'над',
    'для',
    'об',
    'под',
    'про',
  ];

  for (let str of unionsAndPrepositions) {
    if (text.includes(' ' + str + ' ')) {
      text = text.replace(
        ' ' + str + ' ',
        ' ' + str + String.fromCharCode(160)
      );
    }
  }
  return text;
}
